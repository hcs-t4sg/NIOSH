{
  /* Main page that displays lab data given a date and a specific HVAC lab*/
}

import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useQuery, useMutation } from "urql";
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
  const labsData = [];

  const labels = [
    { title: "T454 Hum", color: "#9c88ff" },
    { title: "T454 Temp", color: "#273c75" },
  ];
  const t454_hum = [
    { x: 18, y: 11 },
    { x: 110, y: 20 },
  ];
  const t454_temp = [
    { x: 38, y: 11 },
    { x: 160, y: 150 },
  ];

  const parameters = ["Humidity", "Temperature"];
  const [param, setParam] = useState<number | null>(0);

  {
    /* Set up date picker*/
  }
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  var [lab_hum, set_labhum] = useState([]);
  var [lab_temp, set_labtemp] = useState([]);
  var [lab_hum2, set_labhum2] = useState([]);
  var [lab_temp2, set_labtemp2] = useState([]);

  const [lab1select, setLab1select] = useState<string | null>(null);
  const [lab2select, setLab2select] = useState<string | null>(null);

  const [displayGraph, setDisplayGraph] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function displayGraphFunct() {
    generateGraph();
    setDisplayGraph(true);
  }

  function generateGraph(datas) {
    var lab_hum_arr = [];
    var lab_temp_arr = [];
    var lab_hum2_arr = [];
    var lab_temp2_arr = [];
    var hour = 0;

    for (let entry of datas.observations) {
      if (entry.lab == "H355") {
        var hour = new Date(entry.time).getTime();
        if (hour > new Date(startDate).getTime()) {
          // console.log("check1");
          // if (hour < new Date(endDate).getTime()) {
          console.log("check2");
          lab_hum_arr.push({ x: hour, y: entry.humidity });
          lab_temp_arr.push({
            x: hour,
            y: entry.temperature,
          });
          // }
        }
      }
      // if (entry.lab == lab2select) {
      //   var hour = new Date(entry.time).getTime();
      //   if (hour > new Date(startDate).getTime()) {
      //     if (hour < new Date(endDate).getTime()) {
      //       lab_hum2_arr = lab_hum2_arr.concat({ x: hour, y: entry.humidity });
      //       lab_temp2_arr = lab_temp2_arr.concat({
      //         x: hour,
      //         y: entry.temperature,
      //       });
      //     }
      //   }
      // }
    }
    // set_labhum(lab_hum_arr);
    // set_labtemp(lab_temp_arr);
    // set_labhum2(lab_hum2_arr);
    // set_labtemp2(lab_temp2_arr);
    console.log(lab_temp_arr);
  }

  const lab1 = "H355";
  const labQueryName =
    `
  query queryLab {
    observations(where: {lab: {_eq: "` +
    lab1 +
    `"}}) {
      humidity
      lab
      temperature
      time
    }
  }
  `;

  const [{ data, fetching, error }, executeQuery] = useQuery({
    query: labQueryName,
  });

  if (data != null) {
    console.log("data is not null");
  } else {
    console.log("failed");
  }
  let someArray = [1, "string", false];

  if (fetching) {
    console.log("Fetching");
  } else {
    for (let entry of data.observations) {
      if (labsData.includes(entry.lab)) {
        console.log("Done");
      } else {
        labsData.push(entry.lab);
      }
    }
  }

  if (data != undefined) {
    console.log(data.observations);
    generateGraph(data);
  }

  const handleClose = () => {
    setAnchorEl(null);
    const index = Math.floor(Math.random() * 4);
    var hour = 0;
  };

  return (
    <>
      <Container
        style={{
          width: "80%",
          borderStyle: "none",
          marginTop: "1.75rem",
          padding: "1rem",
        }}
        width={1000}
        height={1000}
      >
        {/* <Button
            id="basic-button"
            aria-controls="basic-menu"
            variant= "contained"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Lab 1
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
        {labsData.map((lab) => {
                      return (
                        <MenuItem key={lab} data-my-lab={lab} onClick={handleMenuItem}>{lab}</MenuItem>
                )})} 
        </Menu>
        <Button
            id="basic-button"
            aria-controls="basic-menu"
            variant= "contained"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick2}
          >
            Lab 2
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
        > */}
        {/* Populate menu items with labs*/}
        {/* {labsData.map((lab) => {
                      return (
                        <MenuItem key={lab} data-my-lab={lab} onClick={handleMenuItem2}>{lab}</MenuItem>
                )})} 
        </Menu> */}
        <Row>
          <Col>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">
                Select First Lab
              </InputLabel>
              <Select
                labelId="category-select-label"
                value={lab1select}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setLab1select(event.target.value as string);
                }}
              >
                {labsData.map((lab, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {" "}
                      {lab}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Col>
          <Col>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">
                Select Second Lab
              </InputLabel>
              <Select
                labelId="category-select-label"
                value={lab2select}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setLab2select(event.target.value as string);
                }}
              >
                {labsData.map((lab, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {" "}
                      {lab}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Col>
          <Col>
            <FormControl fullWidth>
              <label>Start and end dates</label>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
              />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="contained" onClick={displayGraphFunct}>
              Generate comparison
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            {/* {lab_hum != null &&
            lab_temp != null &&
            lab_hum2 != null &&
            lab_temp2 != null && */}
            {displayGraph == true ? (
              <>
                {console.log("dispay")}
                {console.log(lab_temp)}
                <XYPlot
                  width={1000}
                  height={800}
                  margin={{ left: 100, right: 10, top: 10, bottom: 300 }}
                >
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <YAxis title="Temperature/Humidity (°F)" />
                  <XAxis
                    title="Hour"
                    tickFormat={(v) => new Date(v).toString()}
                    tickLabelAngle={-45}
                  />
                  <DiscreteColorLegend
                    items={labels}
                    orientation={"horizontal"}
                  />
                  <LineMarkSeries
                    curve={"curveMonotoneX"}
                    color={"#FF6978"}
                    style={{ fill: "none" }}
                    data={lab_hum}
                    opacity={1}
                  />

                  <LineMarkSeries
                    curve={"curveMonotoneX"}
                    color={"#352D39"}
                    style={{ fill: "none" }}
                    data={lab_temp}
                    opacity={1}
                  />
                </XYPlot>
                <XYPlot
                  width={1000}
                  height={800}
                  margin={{ left: 100, right: 10, top: 10, bottom: 300 }}
                >
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <YAxis title="Temperature/Humidity (°F)" />
                  <XAxis
                    title="Hour"
                    tickFormat={(v) => new Date(v).toString()}
                    tickLabelAngle={-45}
                  />
                  <DiscreteColorLegend
                    items={labels}
                    orientation={"horizontal"}
                  />
                  <LineMarkSeries
                    curve={"curveMonotoneX"}
                    color={"#FF6978"}
                    style={{ fill: "none" }}
                    data={lab_hum2}
                    opacity={1}
                  />
                  <LineMarkSeries
                    curve={"curveMonotoneX"}
                    color={"#352D39"}
                    style={{ fill: "none" }}
                    data={lab_temp2}
                    opacity={1}
                  />
                </XYPlot>
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LabDataCompare;
