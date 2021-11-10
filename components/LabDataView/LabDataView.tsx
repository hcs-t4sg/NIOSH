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
  
  var [otherinfo, setOtherInfo] = useState<number>(0);

  {/* Load labs from Hasura, for now its hard coded*/}
  
  
  var b15_temp = [{x: 10, y: 11}, {x: 150, y: null}, {x: 300, y: null}, {x: 400, y: 37}, {x: 500, y: 47},{x: 1000, y: 71} ]
  const room302_temp = [{x: 8, y: null}, {x: 130, y: 20}, {x: 250, y: null}, {x: 450, y: 50}, {x: 490, y: 47},{x: 675, y: 80} ]
  const room302_hum = [{x: 18, y: 11}, {x: 110, y: 20}, {x: 210, y: 18}, {x: 410, y: 50}, {x: 510, y: 47},{x: 610, y: 80} ]
  const b15_hum = [{x: 38, y: 11}, {x: 160, y:null}, {x: 280, y: null}, {x: 490, y: 50}, {x: 560, y: 47},{x: 620, y: 80} ]
  const labtempIndex = [b15_temp, room302_temp, b15_temp, room302_temp]
  const labhumIndex = [b15_hum, room302_hum, b15_hum, room302_hum]
  const labLabels = ["T454 Humidity", 'T454 Temperature']
  const labels = [{title: 'T454 Hum', color: '#9c88ff'}, {title: 'T454 Temp', color: '#273c75'}]
  const t454_hum = [{x: 18, y: 11}, {x: 110, y: 20}]
  const t454_temp = [{x: 38, y: 11}, {x: 160, y:150}]
  const h309_hum = []
  const h309_temp = []
  const parameters = ["Humidity","Temperature",];
  const [param, setParam] = useState<number | null>(0);

  {/* Set up date picker*/}
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;


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

  


  for (let entry of data.observations) {  
    if (labsData.includes(entry.lab)) {
    console.log("Done")
    }
    else{
    labsData.push(entry.lab) 
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    const index = Math.floor((Math.random())*4)
    var hour = 0
    for (let entry of data.observations) {  
      if (entry.lab == labsData[index]) {
        t454_hum.push({x: hour, y: entry.humidity});
        t454_temp.push({x: hour, y: entry.temperature});
        hour += 1

      }
      else{
        console.log("Data done")
      }
     
    };
    console.log(t454_hum) 
    

  };

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
                        <MenuItem key={lab} onClick={handleClose}>{lab}</MenuItem>
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
        <XYPlot width={1000} height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title = "Hour"/>
          <YAxis title = "Temperature/Humidity (°F)"/>
          <DiscreteColorLegend items={labLabels} orientation={"horizontal"}/>
          <LineMarkSeries 
            curve={'curveMonotoneX'}
            color={'#FF6978'}
            style= {{fill: 'none'}}
            data={t454_hum}
            opacity = {1}
          />
          <LineMarkSeries 
            curve={'curveMonotoneX'}
            color={'#352D39'}
            style= {{fill: 'none'}}
            data={t454_temp}
            opacity = {1}
          />
         
        </XYPlot>
      </Container>
    </>
  );
};
export default LabDataView;
