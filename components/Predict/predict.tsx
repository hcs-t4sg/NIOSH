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

const Predict = () => {
  const parameters = ["Humidity", "Temperature"];
  const information = ["Windows", "Floor"];
  const [status, setStatus] = useState<string | null>(null);
  const [status2, setStatus2] = useState<string | null>(null);
  const [param, setParam] = useState<string | null>(null);
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

  const fetchPrediction = async () => {
    const model = "svr_lin";
    const lab = "H353";
    const param = "humidity";
    const response = await fetch(
      `https://pred-flask-app.herokuapp.com/predict/${lab}/${param}/${timestep}/${model}`
    );
    const data = await response.json();
    console.log(data);
    setMyPred(data);
  };

  {
    /* Load labs from Hasura, for now its hard coded*/
  }
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
        <h3 className="font-weight-normal t4sg-color text-center">
          Lab Data Predictor (for H353 humidity)
        </h3>
        <TextField
          id="filled-basic"
          label="Enter a timestep (hours)"
          variant="filled"
          onChange={(e) => setTimestep(parseInt(e.target.value))}
        />
        <br />
        <Button variant="contained" onClick={fetchPrediction}>
          Predict Humidity
        </Button>
        <br />
        {myPred != "" && timestep ? (
          <p>
            The predicted humidity for H353 at timestep {timestep} is{" "}
            {myPred[0]["result"]}.
          </p>
        ) : null}
      </Container>
    </section>
  );
};
export default Predict;
