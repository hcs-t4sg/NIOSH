{
  /* Main page that displays lab data given a date and a specific HVAC lab*/
}

import * as React from "react";
import { Container } from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from 'urql';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  ChartLabel,
  VerticalGridLines,
  LineMarkSeries,
  LineSeries,
  DiscreteColorLegend,
} from "react-vis";

const LabDataCompare: React.FC = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  var [otherinfo, setOtherInfo] = useState<number>(0);

  {
    /* Load labs from Hasura, for now its hard coded*/
  }
  const labsData = ["B-15", "302", "303", "446"];

  const b15_temp = [
    { x: 10, y: 11 },
    { x: 150, y: 29 },
    { x: 300, y: 7 },
    { x: 400, y: 37 },
    { x: 500, y: 47 },
    { x: 1000, y: 71 },
  ];
  const room302_temp = [
    { x: 8, y: 11 },
    { x: 130, y: 20 },
    { x: 250, y: 18 },
    { x: 450, y: 50 },
    { x: 490, y: 47 },
    { x: 675, y: 80 },
  ];
  const room302_hum = [
    { x: 18, y: 11 },
    { x: 110, y: 20 },
    { x: 210, y: 18 },
    { x: 410, y: 50 },
    { x: 510, y: 47 },
    { x: 610, y: 80 },
  ];
  const b15_hum = [
    { x: 38, y: 11 },
    { x: 160, y: 20 },
    { x: 280, y: 18 },
    { x: 490, y: 50 },
    { x: 560, y: 47 },
    { x: 620, y: 80 },
  ];
  const labtempIndex = [b15_temp, room302_temp, b15_temp, room302_temp];
  const labhumIndex = [b15_hum, room302_hum, b15_hum, room302_hum];
  const labLabels = [
    "B-15 Humidity",
    "B-15 Temperature",
    "302 Humidity",
    "302 Temperature",
  ];

  {
    /* Set up date picker*/
  }
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    otherinfo = 1;
    setAnchorEl(event.currentTarget);
    
  };

  function handleClick2(num: number) {
    console.log(num);
  };

  const labQuery = `
  query MyQuery {
    observations(where: {time: {_gte: "2021-05-18", _lt: "2021-05-19"}, humidity: {_is_null: false}, lab: {_eq: "T454"}}) {
      lab
      temperature
      humidity
      time
    }
  }  
  
  `;


  const [{ data, fetching, error }, executeQuery] = useQuery({
    query: labQuery
  });

  if (fetching){
    console.log("Fetching")
  }
  else {
    let someArray = [1, "string", false];
    var t454_hum = [];
    var t454_temp = [];
    for (let entry of data.observations) {
      var hour = Number(entry.time.split("T")[1].substring(0,2));
      t454_hum.push({x: hour, y: entry.humidity});
      t454_temp.push({x: hour, y: entry.temperature});
      }
    console.log(t454_hum);
  
  }

  {/*if (data != null){
    console.log(data.observations);
  } 
  else{
    console.log("failed")
  }*/}


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
          variant="contained"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Lab Select 1
        </Button>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          variant="contained"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
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
            "aria-labelledby": "basic-button",
          }}
          value={otherinfo}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            setOtherInfo(event.target.value as number);
          }}
        >
          {/* Populate menu items with labs*/}
          {labsData.map((lab, index) => {
            return (
              <MenuItem key={index} value={index} onClick={handleClose}>
                {lab}
              </MenuItem>
            );
          })}
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
          <XAxis title="Time" />
          <YAxis title="Temperature" />
          <YAxis title="Humidity" orientation="right" />
          <DiscreteColorLegend items={labLabels} orientation={"horizontal"} />
          <LineMarkSeries
            curve={"curveMonotoneX"}
            data={labtempIndex[0]}
            opacity={1}
            style={{ fill: "none" }}
          />
          <LineMarkSeries
            curve={"curveMonotoneX"}
            color={"#1dd1a1"}
            style={{ fill: "none" }}
            data={labhumIndex[0]}
            opacity={1}
          />
          <LineMarkSeries
            curve={"curveMonotoneX"}
            color={"#FF6978"}
            style={{ fill: "none" }}
            data={room302_temp}
            opacity={1}
          />
          <LineMarkSeries
            curve={"curveMonotoneX"}
            color={"#352D39"}
            style={{ fill: "none" }}
            data={room302_hum}
            opacity={1}
          />
        </XYPlot>
      </Container>
    </>
  );
};
export default LabDataCompare;
