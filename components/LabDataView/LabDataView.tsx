{/* Main page that displays lab data given a date and a specific HVAC lab*/}

import * as React from 'react';
import { Container } from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useQuery, useMutation } from "urql";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, ChartLabel, VerticalGridLines, LineMarkSeries, LineSeries, DiscreteColorLegend} from 'react-vis';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

export type LabCategory = {
  lab: string;
  temperature: number;
};

const LabDataView: React.FC = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const labsData = [];
  
  const labels = [{title: 'T454 Hum', color: '#9c88ff'}, {title: 'T454 Temp', color: '#273c75'}]
  const t454_hum = [{x: 18, y: 11}, {x: 110, y: 20}]
  const t454_temp = [{x: 38, y: 11}, {x: 160, y:150}]
  
  const parameters = ["Humidity","Temperature",];
  const [param, setParam] = useState<number | null>(0);

  {/* Set up date picker*/}
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  var [lab_hum, set_labhum] = useState([])
  var [lab_temp, set_labtemp] = useState([])


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClick2(num: number) {
    console.log(num);
  };

  const labQuery1 = `
  query MyQuery {
    observations(where: {time: {_gte: "2021-05-18", _lt: "2021-05-19"}, humidity: {_is_null: false}, lab: {_eq: "T454"}}) {
      lab
      temperature
      humidity
      time
    }
  }  
  
  `;

  const labQueryName = `
  query queryLab {
    observations(where: {humidity: {_is_null: false}}) {
      lab
      humidity
      temperature
      time
    }
  }
  
  `; 
  

  const [{ data, fetching, error }, executeQuery] = useQuery({
    query: labQueryName
  });


  if (data != null){
    console.log("data is not null");
    
  } 
  else{
    console.log("failed")
  }
  let someArray = [1, "string", false];

  
  if (fetching){
    console.log("Fetching")
  }
  else {
    for (let entry of data.observations) {  
      if (labsData.includes(entry.lab)) {
      console.log("Done")
      }
      else{
        labsData.push(entry.lab) 
        } 
     
    };
  
  }


  
  const handleClose = () => {
    setAnchorEl(null);
    const index = Math.floor((Math.random())*4)
    var hour = 0
    for (let entry of data.observations) {  
      if (entry.lab == labsData[index]) {
        var hour = new Date(entry.time).getTime();
        if (hour > new Date(startDate).getTime() && hour < new Date(endDate).getTime()) {
        set_labhum(lab_hum.concat({x: hour, y: entry.humidity}));
        set_labtemp(lab_temp.concat({x: hour, y: entry.temperature}));
        t454_hum.push({x: hour, y: entry.humidity})

      }}
      else{
        console.log("Data done")
      }
     
    };
    
    console.log("HUMIDITY IS:" + t454_hum)
    console.log("Start date get time is " + startDate + new Date(startDate).getTime())
 
    

  };

  const handleMenuItem = event => {
    const { myLab } = event.currentTarget.dataset
    console.log(myLab)
    lab_hum = []
    lab_temp = []
    var hour = 0
    for (let entry of data.observations) {  
      if (entry.lab == myLab) {
        var hour = new Date(entry.time).getTime();
        if (hour > new Date(startDate).getTime()) {
          if (hour < new Date(endDate).getTime()) {
          console.log("this is also working")
          lab_hum = lab_hum.concat({x: hour, y: entry.humidity})
          set_labhum(lab_hum);
          lab_temp = lab_temp.concat({x: hour, y: entry.temperature}) 
          set_labtemp(lab_temp);
          t454_hum.push({x: hour, y: entry.humidity})
      }}}
      else{
        console.log("Data done")
      }
    };


    console.log(lab_hum)
    console.log(lab_temp)
    console.log(t454_hum)
    console.log("Start date get time is " + startDate + new Date(startDate).getTime())
 
    

  }

  return (
    <>
      <Container
        style={{
          width: "80%",
          borderStyle: "none",
          marginTop: "1.75rem",
          padding: "1rem"
        }}
        width={1000}
        height={1000}
        
      >

    <Button
            id="basic-button"
            aria-controls="basic-menu"
            variant= "contained"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Labs
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
        >
            {/* Populate menu items with labs*/}
            {labsData.map((lab) => {
                      return (
                        <MenuItem key={lab} data-my-lab={lab} onClick={handleMenuItem}>{lab}</MenuItem>
                )})} 
        </Menu>

        <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
    /> 

        {/* Load lab data on graph, for now, hard-coded*/}
        <XYPlot width={1000} height={800} margin={{left: 100, right: 10, top: 10, bottom:300}}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <YAxis title = "Temperature/Humidity (°F)"/>
          <XAxis title = "Hour" tickFormat={v => (new Date(v)).toString()} tickLabelAngle={-45} />
          <DiscreteColorLegend items={labels} orientation={"horizontal"}/>
          <LineSeries 
            curve={'curveMonotoneX'}
            color={'#FF6978'}
            style= {{fill: 'none'}}
            strokeWidth = {4}
            data={lab_hum}
            opacity = {1}
             
          />
          <LineSeries 
            curve={'curveMonotoneX'}
            color={'#352D39'}
            style= {{fill: 'none'}}
            strokeStyle = {'dashed'}
            strokeWidth = {4}
            data={lab_temp}
            opacity = {1}
          />
         
        </XYPlot>
      </Container>
      <Box m = {5}> 
      <a href="/comparison-page" className="btn btn-primary btn-block">
                Comparison Page <span className="ml-2 right-icon text-center">&#8594;</span>
      </a>
      </Box>  
    </>
  );
};
export default LabDataView;
