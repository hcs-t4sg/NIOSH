{
  /* Main page that displays lab data given a date and a specific HVAC lab*/
}

import * as React from "react";
import { Container } from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
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
  DiscreteColorLegend,
} from "react-vis";
import { UPDATE_OPERATORS } from "@babel/types";

const LabDataCompare: React.FC<{ title: string }> = (props) => {
  const [myPred, setMyPred] = useState("");
  const [displayGraph, setDisplayGraph] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [otherinfo, setOtherInfo] = useState<number | null>(0);

  {
    /* Load labs from Hasura, for now its hard coded*/
  }

  const initial: { x: { date: number }; y: { y_val: any } }[] = [];

  const initial2: Date[] = [];

  const [dateRange, setDateRange] = useState(initial2);
  const [startDate, endDate] = dateRange;
  const [graphData, setGraphData] = useState(initial);
  const [indicator, setIndicator] = useState(0);

  function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  const fetchPrediction = async (model, lab, param, timestep, setback) => {
    // const lab = "H353";
    // const param = "humidity";
    const response = await fetch(
      `https://pred-flask-app.herokuapp.com/predict/${lab}/${param}/${timestep}/${setback}/${model}`
    );
    const data = await response.json();
    // console.log(data);
    return data;
  };

  function fetchPredictions2(model, lab, param, timestep1, timestep2, setback) {
    fetch(
      `https://pred-flask-app.herokuapp.com/predictmany/${lab}/${param}/${timestep1}/${timestep2}/${setback}/${model}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        if (myPred == "") {
          console.log(data[0]);
          setMyPred(data[0]);
        }
      });
  }

  const fetchPredictions = async (
    model,
    lab,
    param,
    timestep1,
    timestep2,
    setback
  ) => {
    // const lab = "H353";
    // const param = "humidity";
    const response = await fetch(
      `https://pred-flask-app.herokuapp.com/predictmany/${lab}/${param}/${timestep1}/${timestep2}/${setback}/${model}`
    );
    const data = await response.json();
    // console.log(data);
    // setMyPred(data[0]);
    return data[0];
    // console.log(data[0]);
  };

  // var graphData = [];

  function get_data_predictions(
    model,
    lab,
    dateRange: Date[],
    parameter,
    setback
  ) {
    var data_for_graph: { x: { date: number }; y: { y_val: any } }[] = [];
    const datedifference_hours = datediff(dateRange[0], dateRange[1]) * 24;
    const datedifference_hours_test = 48;
    const dateShift = 0;

    fetchPredictions2(
      model,
      lab,
      parameter,
      0 + dateShift,
      datedifference_hours_test + dateShift,
      setback
    );
    var pred = myPred;
    // console.log(myPred);
    var result = pred["result"];
    if (result == null) {
      result = [];
    }
    // console.log(result);
    for (let i = 0; i < result.length; i++) {
      const date = i + dateShift;
      const y_val = result[i];
      const datapoint = { x: { date }, y: { y_val } };
      data_for_graph.push(datapoint);
    }

    console.log(data_for_graph);

    return data_for_graph;
  }

  const labsData = ["H353", "B15"];

  // const h353_hum_pred = [
  //   get_data_predictions("svr_lin", "H353", dateRange, "humidity", 1),
  // ];

  // const labhumIndex = [h353_hum_pred];
  const labLabels = ["H353 Humidity"];

  {
    /* Set up date picker*/
  }

  if (dateRange != null && graphData.length == 0 && indicator == 0) {
    const test = get_data_predictions(
      "svr_lin",
      "H353",
      dateRange,
      "humidity",
      1
    );
    setIndicator(1);
    setGraphData(test);
    // setDisplayGraph(true);
    console.log(graphData);
  }

  var d1 = new Date(2021, 10, 28);
  var d2 = new Date(2021, 10, 30);

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
          Lab Selector
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
            setDateRange([d1, d2]);
          }}
          isClearable={true}
        />

        {/* Load lab data on graph, for now, hard-coded*/}

        {displayGraph ? (
          <XYPlot width={1000} height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time" />
            {/* <YAxis title="Temperature" /> */}
            <YAxis title="Humidity" orientation="right" />
            <DiscreteColorLegend items={labLabels} orientation={"horizontal"} />
            <LineMarkSeries
              curve={"curveMonotoneX"}
              data={graphData}
              opacity={1}
              style={{ fill: "none" }}
            />
          </XYPlot>
        ) : null}
      </Container>
    </>
  );
};
export default LabDataCompare;
