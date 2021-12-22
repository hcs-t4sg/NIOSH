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

import CompareGraphs from "./CompareGraphs";

export type LabCategory = {
  lab: string;
  temperature: number;
};

const LabDataCompare: React.FC = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const labSelectable = [
    "H309",
    "H351",
    "H353",
    "H355",
    "H424",
    "H460",
    "T303",
    "T449",
    "T454",
    "TB01",
    "TB15",
  ];

  const parameters = ["Humidity", "Temperature"];
  const [param, setParam] = useState<number | null>(0);

  {
    /* Set up date picker*/
  }
  const [dateRange, setDateRange] = useState<Array<string> | Array<null>>([
    null,
    null,
  ]);
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
    // console.log(labsData);
    setDisplayGraph(true);
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
                {labSelectable.map((lab, index) => {
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
                {labSelectable.map((lab, index) => {
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
                maxDate={new Date(2021, 7)}
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
      </Container>
      <Container>
        <Row>
          <Col>
            {lab1select != null &&
            lab2select != null &&
            displayGraph == true ? (
              <CompareGraphs
                lab1={labSelectable[parseInt(lab1select)]}
                lab2={labSelectable[parseInt(lab2select)]}
                startDate={startDate}
                endDate={endDate}
              />
            ) : null}
          </Col>
        </Row>
        <Row>
          {displayGraph == true ? (
            <Button href="/">Clear Comparison</Button>
          ) : null}
        </Row>
      </Container>
    </>
  );
};
export default LabDataCompare;
