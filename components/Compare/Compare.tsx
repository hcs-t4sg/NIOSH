{/* Main page that displays lab data given a date and a specific HVAC lab*/}

import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
} from "react-vis";
import LabDataCompare from "../LabDataCompare/LabDataCompare";

const Compare = () => {
  const parameters = ["Humidity", "Temperature"];
  const information = ["Windows", "Floor"];
  const [status, setStatus] = useState<string | null>(null);
  const [status2, setStatus2] = useState<string | null>(null);
  const [param, setParam] = useState<string | null>(null);
  const [otherinfo, setOtherInfo] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const labsData = [
    "B-15",
    "302",
    "303",
    "446",
    "449/451",
    "454",
    "Outdoor",
    "B-01",
    "309",
    "351",
    "355",
    "424",
    "460",
    "353",
  ];

  {
    /* Set up date picker*/
  }
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <section className="section position-relative">
      <Container>
        <Row>
          <h3 className="font-weight-normal t4sg-color text-center">
            Results:
          </h3>
          <Col>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Parameters</InputLabel>
              <Select
                labelId="category-select-label"
                value={param}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setParam(event.target.value as string);
                }}
              >
                {parameters.map((parameter, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {" "}
                      {parameter}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">
                Other Information
              </InputLabel>
              <Select
                labelId="category-select-label"
                value={otherinfo}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setOtherInfo(event.target.value as string);
                }}
              >
                {information.map((info, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {" "}
                      {info}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Col>
          <Col>
            <Row>
              <h1> {"     "}</h1>
              <h5 className="text-center">
                {" "}
                Displaying predictions for: {param}{" "}
              </h5>{" "}
            </Row>
            <Row>
              <h1> {"     "}</h1>
              <h5 className="text-center">
                {" "}
                Lab {status + 1}: {otherinfo}{" "}
              </h5>{" "}
            </Row>
            <Row>
              {" "}
              <h5 className="text-center">
                {" "}
                Lab {status2 + 1}: {otherinfo}{" "}
              </h5>{" "}
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <LabDataCompare />
          </Col>
        </Row>
      </Container>
      <Box m={20}> </Box>
    </section>
  );
};
export default Compare;
