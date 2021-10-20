{/* Main page that displays lab data given a date and a specific HVAC lab*/}

import * as React from 'react';
import { Container } from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, ChartLabel, VerticalGridLines, LineMarkSeries, LineSeries} from 'react-vis';


const LabDataView: React.FC = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  {/* Load labs from Hasura, for now its hard coded*/}
  const labsData = ["B-15", "302", "303", "446", "449/451", "454","Outdoor","B-01","309","351","355","424","460", "353"];
  const b15_temp = [{x: 10, y: 11}, {x: 150, y: 29}, {x: 300, y: 7}, {x: 400, y: 37}, {x: 500, y: 47},{x: 1000, y: 71} ]
  const b15_hum = [{x: 5, y: 11}, {x: 34, y: 29}, {x: 80, y: 7}, {x: 9, y: 37}, {x: 7, y: 47},{x: 70, y: 71} ]
  {/* Set up date picker*/}
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <Container
        style={{
          width: "80%",
          borderStyle: "solid",
          padding: "0.75rem",
          marginTop: "0.75rem",
        }}
        
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
          <XAxis />
          <YAxis />
          <LineMarkSeries 
            curve={'curveMonotoneX'}
            data={[{x: 10, y: 11}, {x: 150, y: 29}, {x: 300, y: 7}, {x: 400, y: 37}, {x: 500, y: 47},{x: 1000, y: 71} ]}
            opacity = {1}
            style= {{fill: 'none'}}
          />
          <LineMarkSeries 
            curve={'curveMonotoneX'}
            color={'#1dd1a1'}
            style= {{fill: 'none'}}
            data={b15_hum}
            opacity = {1}
          />
          
        </XYPlot>
      </Container>
    </>
  );
};
export default LabDataView;