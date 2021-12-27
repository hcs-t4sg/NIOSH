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
import Loader from "react-loader-spinner";
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

interface CompareProps {
  lab1: string;
  lab2: string;
  startDate: string | null;
  endDate: string | null;
}

export type LabCategory = {
  lab: string;
  temperature: number;
};

const CompareGraphs: React.FC<CompareProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tooltip1, setTooltip1] = useState([]);
  const [tooltip2, setTooltip2] = useState([]);
  const [tooltip3, setTooltip3] = useState([]);
  const [tooltip4, setTooltip4] = useState([]);
  const open = Boolean(anchorEl);
  //@ts-ignore
  var labsData = [];

  {
    /* Set up date picker*/
  }
  var [lab_hum1, set_labhum1] = useState([]);
  var [lab_temp1, set_labtemp1] = useState([]);
  var [lab_hum2, set_labhum2] = useState([]);
  var [lab_temp2, set_labtemp2] = useState([]);

  const [displayGraph, setDisplayGraph] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function displayGraphFunct() {
    //@ts-ignore
    console.log(labsData);
    //@ts-ignore
    parseData(labsData);
  }

  //@ts-ignore
  function parseData(datas) {
    var lab1_hum_arr = [];
    var lab1_temp_arr = [];
    var lab2_hum_arr = [];
    var lab2_temp_arr = [];
    var hour = 0;
    for (let entry of datas.observations) {
      if (entry.lab == props.lab1) {
        if (entry.temperature == null) {
          entry.temperature = -1;
        }
        if (entry.humidity == null) {
          entry.humidity = -1;
        }
        var hour = new Date(entry.time).getTime();
        //@ts-ignore
        if (hour > new Date(props.startDate).getTime()) {
          //@ts-ignore
          if (hour < new Date(props.endDate).getTime()) {
            if (entry.humidity > -1) {
              lab1_hum_arr.push({ x: hour, y: entry.humidity });
            }
            if (entry.temperature > -1) {
              lab1_temp_arr.push({
                x: hour,
                y: entry.temperature,
              });
            }
          }
        }
      }
      if (entry.lab == props.lab2) {
        if (entry.temperature == null) {
          entry.temperature = -1;
        }
        if (entry.humidity == null) {
          entry.humidity = -1;
        }
        var hour = new Date(entry.time).getTime();
        //@ts-ignore
        if (hour > new Date(props.startDate).getTime()) {
          //@ts-ignore
          if (hour < new Date(props.endDate).getTime()) {
            if (entry.humidity > -1) {
              lab2_hum_arr.push({ x: hour, y: entry.humidity });
            }
            if (entry.temperature > -1) {
              lab2_temp_arr.push({
                x: hour,
                y: entry.temperature,
              });
            }
          }
        }
      }
    }
    console.log(lab1_temp_arr);
    console.log(lab1_hum_arr);
    console.log(lab2_temp_arr);
    console.log(lab2_hum_arr);
    //@ts-ignore
    const hour_sp = new Date(props.startDate).getTime();
    if (lab1_temp_arr.length == 0) {
      console.log(lab1_temp_arr);
      lab1_temp_arr.push({
        x: hour_sp,
        y: null,
      });
    }
    if (lab1_hum_arr.length == 0) {
      console.log(lab1_hum_arr);
      lab1_hum_arr.push({
        x: hour_sp,
        y: null,
      });
    }
    if (lab2_temp_arr.length == 0) {
      console.log(lab2_temp_arr);
      lab2_temp_arr.push({
        x: hour_sp,
        y: null,
      });
    }
    if (lab2_hum_arr.length == 0) {
      console.log(lab2_hum_arr);
      lab2_hum_arr.push({
        x: hour_sp,
        y: null,
      });
    }
    return [lab1_temp_arr, lab1_hum_arr, lab2_temp_arr, lab2_hum_arr];
  }

  const labQueryName = `
  query queryLab {
    observations {
      lab
      humidity
      temperature
      time
    }
  }
  `;

  const labQuery1 =
    `
  query queryLab {
    observations(where: {lab: {_eq: "` +
    props.lab1 +
    `"}}) {
      humidity
      lab
      temperature
      time
    }
  }
  `;

  console.log([props.lab1, props.lab2]);

  const labQuery =
    `
  query queryLab {
    observations(where: {_or: [{lab: {_eq: "` +
    props.lab1 +
    `"}}, {lab: {_eq: "` +
    props.lab2 +
    `"}}]}) {
      humidity
      lab
      temperature
      time
    }
  }
  `;

  const [{ data, fetching, error }, executeQuery] = useQuery({
    query: labQuery,
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
      //@ts-ignore
      if (labsData.includes(entry.lab)) {
        console.log("Done");
      } else {
        labsData.push(entry.lab);
      }
    }
  }
  if (fetching)
    return (
        <Loader
          type="Puff"
          color="#3576cb"
          height={50}
          width={50}
          timeout={4000} //3 secs
        />
    );

  console.log(data);

  //@ts-ignore
  var data_graph_lab1_temp = [];
  //@ts-ignore
  var data_graph_lab1_hum = [];
  //@ts-ignore
  var data_graph_lab2_temp = [];
  //@ts-ignore
  var data_graph_lab2_hum = [];

  if (data != undefined) {
    const data_graph_lab = parseData(data);
    data_graph_lab1_temp = data_graph_lab[0];
    data_graph_lab1_hum = data_graph_lab[1];
    data_graph_lab2_temp = data_graph_lab[2];
    data_graph_lab2_hum = data_graph_lab[3];
  }

  const labLabelsTemp = ["First Lab Temperature", "Second Lab Temperature"];
  const labLabelsHum = ["First Lab Temperature", "Second Lab Temperature"];

  //@ts-ignore
  return (
    //@ts-ignore
    <>
      {//@ts-ignore
      data_graph_lab1_temp != [] &&
      //@ts-ignore
      data_graph_lab1_hum != [] &&
      //@ts-ignore
      data_graph_lab2_temp != [] &&
      //@ts-ignore
      data_graph_lab2_hum != [] ? (
        <>
          <Row>
            <Col>
              {tooltip1[0] != null ? (
                <>
                  <h5>Mouse hover for Lab {props.lab1} (red)</h5>
                  <p>
                    x: {new Date(tooltip1[0]["x"]).toString().substring(0, 33)}
                  </p>
                  <>
                    {tooltip1[0]["y"] != null ? (
                      <p>y: {tooltip1[0]["y"]} degrees F</p>
                    ) : (
                      <p> There is no data for the hovered date/time. </p>
                    )}
                  </>
                </>
              ) : null}
            </Col>
            <Col>
              {tooltip2[0] != null ? (
                <>
                  <h5>Mouse hover for Lab {props.lab2} (black)</h5>
                  <p>
                    x: {new Date(tooltip2[0]["x"]).toString().substring(0, 33)}
                  </p>
                  <>
                    {tooltip2[0]["y"] != null ? (
                      <p>y: {tooltip2[0]["y"]} degrees F</p>
                    ) : (
                      <p> There is no data for the hovered date/time. </p>
                    )}
                  </>
                </>
              ) : null}
            </Col>
          </Row>
          <XYPlot
            width={1000}
            height={800}
            margin={{ left: 100, right: 10, top: 10, bottom: 300 }}
            yDomain={[50, 100]}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <YAxis title="Temperature (°F)" />
            <XAxis
              title="Hour"
              tickLabelAngle={-90}
              tickFormat={(v) => new Date(v).toString().substring(0, 33)}
            />
            {/* <DiscreteColorLegend items={labels} orientation={"horizontal"} /> */}
            <LineMarkSeries
              curve={"curveMonotoneX"}
              color={"#FF6978"}
              //@ts-ignore
              size={2}
              strokeWidth={3}
              strokeStyle={"dashed"}
              //@ts-ignore
              onNearestXY={(d) => setTooltip1([d, "Hovering on First Lab"])}
              style={{ fill: "none" }}
              //@ts-ignore
              data={data_graph_lab1_temp}
              opacity={1}
            />
            <LineMarkSeries
              curve={"curveMonotoneX"}
              color={"#352D39"}
              //@ts-ignore
              size={2}
              strokeWidth={3}
              strokeStyle={"dashed"}
              //@ts-ignore
              onNearestXY={(d) => setTooltip2([d, "Hovering on Second Lab"])}
              style={{ fill: "none" }}
              //@ts-ignore
              data={data_graph_lab2_temp}
              opacity={1}
            />
          </XYPlot>
          <Row>
            <Col>
              {tooltip3[0] != null ? (
                <>
                  <h5>Mouse hover for Lab {props.lab1} (red)</h5>
                  <p>
                    x: {new Date(tooltip3[0]["x"]).toString().substring(0, 33)}
                  </p>
                  <>
                    {tooltip3[0]["y"] != null ? (
                      <p>y: {tooltip3[0]["y"]}%</p>
                    ) : (
                      <p> There is no data for the hovered date/time. </p>
                    )}
                  </>
                </>
              ) : null}
            </Col>
            <Col>
              {tooltip4[0] != null ? (
                <>
                  <h5>Mouse hover for Lab {props.lab2} (black)</h5>
                  <p>
                    x: {new Date(tooltip4[0]["x"]).toString().substring(0, 33)}
                  </p>
                  <>
                    {tooltip4[0]["y"] != null ? (
                      <p>y: {tooltip4[0]["y"]}%</p>
                    ) : (
                      <p> There is no data for the hovered date/time. </p>
                    )}
                  </>
                </>
              ) : null}
            </Col>
          </Row>
          <XYPlot
            width={1000}
            height={800}
            margin={{ left: 100, right: 10, top: 10, bottom: 300 }}
            yDomain={[0, 100]}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <YAxis title="Humidity (%)" />
            <XAxis
              title="Hour"
              tickFormat={(v) => new Date(v).toString().substring(0, 33)}
              tickLabelAngle={-90}
            />
            {/* <DiscreteColorLegend items={labels} orientation={"horizontal"} /> */}
            <LineMarkSeries
              curve={"curveMonotoneX"}
              color={"#FF6978"}
              //@ts-ignore
              size={2}
              strokeWidth={3}
              strokeStyle={"dashed"}
              //@ts-ignore
              onNearestXY={(d) => setTooltip3([d, "Hovering on First Lab"])}
              style={{ fill: "none" }}
              //@ts-ignore
              data={data_graph_lab1_hum}
              opacity={1}
            />
            <LineMarkSeries
              curve={"curveMonotoneX"}
              color={"#352D39"}
              //@ts-ignore
              size={2}
              strokeWidth={3}
              strokeStyle={"dashed"}
              //@ts-ignore
              onNearestXY={(d) => setTooltip4([d, "Hovering on Second Lab"])}
              style={{ fill: "none" }}
              //@ts-ignore
              data={data_graph_lab2_hum}
              opacity={1}
            />
          </XYPlot>
        </>
      ) : null}
    </>
  );
};
export default CompareGraphs;
