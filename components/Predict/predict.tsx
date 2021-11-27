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
  const [param, setParam] = useState<string | null>(null);

  const labs = ["H353"];
  const [lab, setLab] = useState<string | null>(null);

  const models = ["svr_lin", "svr_rbf", "svr_poly"];
  const [model, setModel] = useState<string | null>(null);

  const [timestep1, setTimestep1] = useState<number | null>();
  const [timestep2, setTimestep2] = useState<number | null>();

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
              <InputLabel id="category-select-label">Lab</InputLabel>
              <Select
                labelId="category-select-label"
                value={lab}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setLab(event.target.value as string);
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
                  setModel(event.target.value as string);
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
              <TextField
                id="standard-basic"
                label="Starting Timestep"
                value={timestep1}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setTimestep1(event.target.value as number);
                }}
              ></TextField>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Ending Timestep"
                value={timestep2}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setTimestep2(event.target.value as number);
                }}
              ></TextField>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Setback?</InputLabel>
              <Select
                labelId="category-select-label"
                value={setback}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setSetback(event.target.value as string);
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
            timestep1 != null &&
            timestep2 != null &&
            setback != null &&
            model != null &&
            displayGraph == true ? (
              <LabDataPredict
                lab={labs[lab]}
                parameter={parameters[param]}
                timestep1={timestep1}
                timestep2={timestep2}
                setback={setback}
                model={models[model]}
              />
            ) : null}
          </Col>
        </Row>
        <Row>
          {displayGraph == true ? (
            <Button href="/predict-page/">Clear Predictions</Button>
          ) : null}
        </Row>
      </Container>
      <Box m={20}> </Box>
    </section>
  );
};
export default Predict;
