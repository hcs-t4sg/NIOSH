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
import LabDataPredict from "../LabDataPredict/LabDataPredict";

const Predict = () => {
  const parameters = ["humidity", "temperature"];
  // const parameters = ["temperature"];
  const [param, setParam] = useState<number | null>(null);

  const labs = [
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

  const [lab, setLab] = useState<number | null>(null);

  const models_names = ["svr_lin", "svr_rbf", "svr_poly"];
  const models = [
    "Support vector regression: linear",
    "Support vector regression: radial basis function",
    "Support vector regression: polynomial",
  ];
  const [model, setModel] = useState<number | null>(null);

  const [month1, setMonth1] = useState<number | null>();
  const [day1, setDay1] = useState<number | null>();
  const [month2, setMonth2] = useState<number | null>();
  const [day2, setDay2] = useState<number | null>();

  const [selectedDate1, setSelectedDate1] = useState<Date | null>(null);

  const handleDateChange1 = (date: Date) => {
    if (date != undefined) {
      setSelectedDate1(date);
      setMonth1(date.getMonth() + 1);
      setDay1(date.getDate());
    }
  };

  const [selectedDate2, setSelectedDate2] = useState<Date | null>(null);

  const handleDateChange2 = (date: Date) => {
    if (date != undefined) {
      setSelectedDate2(date);
      setMonth2(date.getMonth() + 1);
      setDay2(date.getDate());
    }
  };

  const setbacks = ["Yes", "No"];
  const [setback, setSetback] = useState<number | null>(null);

  const [displayGraph, setDisplayGraph] = useState<boolean>(false);

  const information = ["Windows", "Floor"];
  const [status, setStatus] = useState<string | null>(null);
  const [status2, setStatus2] = useState<string | null>(null);
  const [timestep, setTimestep] = useState(0);
  const [myPred, setMyPred] = useState("");
  const [otherinfo, setOtherInfo] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  {
    /* Load labs from Hasura, for now its hard coded*/
  }

  {
    /* Set up date picker*/
  }
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  function displayGraphFunct() {
    setDisplayGraph(true);
  }

  function setDateRange(dates: Array<Date> | null) {
    if (dates != null) {
      handleDateChange1(dates[0]);
      handleDateChange2(dates[1]);
    }
  }

  return (
    <section className="section position-relative">
      <Container>
        <Row>
          <h3 className="font-weight-normal t4sg-color text-center">
            Predict Future Lab Temperature/Humidity
          </h3>
          <Col>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Parameters</InputLabel>
              <Select
                labelId="category-select-label"
                value={param}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setParam(event.target.value as number);
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
              <InputLabel id="category-select-label">Lab</InputLabel>
              <Select
                labelId="category-select-label"
                value={lab}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setLab(event.target.value as number);
                }}
              >
                {labs.map((lab, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {" "}
                      {lab}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Model</InputLabel>
              <Select
                labelId="category-select-label"
                value={model}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setModel(event.target.value as number);
                }}
              >
                {models.map((model, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {" "}
                      {model}{" "}
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
                minDate={new Date()}
                selectsRange={true}
                startDate={selectedDate1}
                endDate={selectedDate2}
                onChange={(update) => {
                  // @ts-ignore
                  setDateRange(update);
                }}
                // isClearable={true}
              />
            </FormControl>
            {/* <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Starting Month"
                value={month1}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setMonth1(event.target.value as number);
                }}
              ></TextField>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Starting Day"
                value={day1}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setDay1(event.target.value as number);
                }}
              ></TextField>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Ending Month"
                value={month2}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setMonth2(event.target.value as number);
                }}
              ></TextField>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Ending Day"
                value={day2}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setDay2(event.target.value as number);
                }}
              ></TextField>
            </FormControl> */}
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Setback?</InputLabel>
              <Select
                labelId="category-select-label"
                value={setback}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setSetback(event.target.value as number);
                }}
              >
                {setbacks.map((setback, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {" "}
                      {setback}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Button variant="contained" onClick={displayGraphFunct}>
              Graph Predictions!
            </Button>
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        <Row>
          <Col>
            {param != null &&
            lab != null &&
            month1 != null &&
            day1 != null &&
            month2 != null &&
            day2 != null &&
            setback != null &&
            model != null &&
            displayGraph == true ? (
              <LabDataPredict
                lab={labs[lab]}
                parameter={parameters[param]}
                month1={month1}
                day1={day1}
                month2={month2}
                day2={day2}
                setback={setback}
                model={models_names[model]}
              />
            ) : null}
          </Col>
        </Row>
        <Row>
          {displayGraph == true ? (
            <Button href="/predictions/">Clear Predictions</Button>
          ) : null}
        </Row>
      </Container>
      <Box m={20}> </Box>
    </section>
  );
};
export default Predict;
