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
import {XYPlot, XAxis, YAxis, HorizontalGridLines, ChartLabel, VerticalGridLines, LineMarkSeries, LineSeries, DiscreteColorLegend, Highlight} from 'react-vis';
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

const LabDataCompare: React.FC = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  var [otherinfo, setOtherInfo] = useState<number>(0);

  {/* Load labs from Hasura, for now its hard coded*/}
  const labsData = ["B-15", "302", "303", "446"];
  var b15_temp = [{x: 10, y: 11}, {x: 150, y: null}, {x: 300, y: null}, {x: 400, y: 37}, {x: 500, y: 47},{x: 1000, y: 71} ]
  const room302_temp = [{x: 8, y: null}, {x: 130, y: 20}, {x: 250, y: null}, {x: 450, y: 50}, {x: 490, y: 47},{x: 675, y: 80} ]
  const room302_hum = [{x: 18, y: 11}, {x: 110, y: 20}, {x: 210, y: 18}, {x: 410, y: 50}, {x: 510, y: 47},{x: 610, y: 80} ]
  const b15_hum = [{x: 38, y: 11}, {x: 160, y:null}, {x: 280, y: null}, {x: 490, y: 50}, {x: 560, y: 47},{x: 620, y: 80} ]
  const labtempIndex = [b15_temp, room302_temp, b15_temp, room302_temp]
  const labhumIndex = [b15_hum, room302_hum, b15_hum, room302_hum]
  const labLabels = ["T454 Hum", 'T454 Temp', 'H309 Hum', 'H309 Temp']
  const colorLabels = ["#352D39", "#352D39", "#352D39", "#352D39"]
  const labels = [{title: 'T454 Hum', color: '#9c88ff'}, {title: 'T454 Temp', color: '#273c75'}, {title: 'H309 Hum', color: '#b71540'}, {title: 'H309 Temp', color: '#e55039'}]
  const t454_hum = []
  const t454_temp = []
  const h309_hum = []
  const h309_temp = []
  const parameters = ["Humidity","Temperature",];
  const [param, setParam] = useState<number | null>(0);

  {/* Set up date picker*/}
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    otherinfo = 1;
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

  const labQuery2 = `
  query MyQuery {
    observations(where: {_or: [{time: {_gte: "2021-05-18", _lt: "2021-05-22"}, humidity: {_is_null: false}, lab: {_eq: "T454"}}, {time: {_gte: "2021-05-18", _lt: "2021-05-22"}, humidity: {_is_null: false}, lab: {_eq: "H309"}}]}) {
      temperature
      time
      humidity
      lab
    }
  }  
  
  `;


  var [{ data, fetching, error }, executeQuery] = useQuery({
    query: labQuery2
  });


  if (fetching){
    console.log("Fetching")
  }
  else {
    let someArray = [1, "string", false];
    for (let entry of data.observations) {
      var hour = Number(entry.time.split("T")[1].substring(0,2));
      var timestamp = new Date(entry.time).getTime();
      const timestamp2 = new Date('September 10 2017').getTime();
      console.log(timestamp)
      console.log(timestamp2)
      console.log(entry.time.split("T")[0]+" "+entry.time.split("T")[1])
      var dt = entry.time.split("T")[0]+" "+entry.time.split("T")[1]
      if (entry.lab == "H309")
      {
        h309_hum.push({x: timestamp, y: entry.humidity});
        h309_temp.push({x: timestamp, y: entry.temperature});
      }
      if(entry.lab == "T454")
      {
        t454_hum.push({x: timestamp, y: entry.humidity});
        t454_temp.push({x: timestamp, y: entry.temperature});
      }
      
      }
  
  }
  
  if (data != null){
    console.log(data.observations);
  } 
  else{
    console.log("failed")
  }

console.log(t454_hum);
console.log(h309_hum);
console.log("Start Date")
console.log(startDate)
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
            onClick={() => handleClick2(1)}
          >
            Lab Select 1
        </Button>
        <Button
            id="basic-button"
            aria-controls="basic-menu"
            variant= "contained"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick= {() => 
              handleClick2(2)
            }
          >
            Lab Select 2
        </Button>
        {/* Lab selection buttons*/}
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}

            > 

              {labsData.map((lab) => {
                      return (
                        <MenuItem key={lab} onClick={handleClose}>{lab}</MenuItem>
                )})} 

            {/* Populate menu items with labs
            {data ?? data.observations.map(((DataS: LabCategory) => {
                  return (
                    <MenuItem key={DataS.lab} value={DataS.temperature} onClick={handleClose}>{DataS.lab}</MenuItem>
               )}))
              } 
              */}
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
          <DiscreteColorLegend items={labels} orientation={"horizontal"}/>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title = "Hour"/>
          <YAxis title = "Temperature/Humidity (°F)"/>
          <LineMarkSeries 
            curve={'curveMonotoneX'}
            color={'#9c88ff'}
            style= {{fill: 'none'}}
            data={t454_hum}
            opacity = {1}
          />
          <LineMarkSeries 
            curve={'curveMonotoneX'}
            color={'#273c75'}
            style= {{fill: 'none'}}
            data={t454_temp}
            opacity = {1}
          />
          <LineMarkSeries 
            curve={'curveMonotoneX'}
            color={'#b71540'}
            style= {{fill: 'none'}}
            data={h309_hum}
            opacity = {1}
          />
          <LineMarkSeries 
            curve={'curveMonotoneX'}
            color={'#e55039'}
            style= {{fill: 'none'}}
            data={h309_temp}
            opacity = {1}
          />
          <Highlight
            drag
            enableX={false}
            /* onDrag={area => (this as any).setState({filter: area})}*//>

        </XYPlot>
      </Container>
    </>
  );
};

export default LabDataCompare;
