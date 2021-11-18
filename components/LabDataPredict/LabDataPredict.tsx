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
import axios from "axios";
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

var d1 = new Date(2021, 10, 28);
var d2 = new Date(2021, 10, 30);

interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
  result: string;
}

interface PredProps {
  lab: string;
  parameter: string;
  timestep1: number;
  timestep2: number;
  setback: number;
  model: string;
}

const defaultPosts: IPost[] = [];

const LabDataCompare: React.FC<PredProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] =
    React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  const url =
    "https://pred-flask-app.herokuapp.com/predictmany/" +
    props.lab +
    "/" +
    props.parameter +
    "/" +
    props.timestep1 +
    "/" +
    props.timestep2 +
    "/" +
    props.setback +
    "/" +
    props.model;

  console.log(url);

  React.useEffect(() => {
    axios
      .get<IPost[]>(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPosts([response.data[0]]);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  function prepareData(posts: IPost[]) {
    if (posts[0] != undefined) {
      const data = posts[0].result;
      var data_graph = [];
      for (let i = 0; i < data.length; i++) {
        const time = i + parseInt(props.timestep1.toString());
        const point = { x: time, y: data[i] };
        data_graph.push(point);
      }
      return data_graph;
    }
  }

  // function getPredictions() {
  //   const lab = prompt("Please enter the lab:");
  //   const param = prompt("Please enter the parameter:");
  //   const timestep1 = prompt("Please enter the timestep1:");
  //   const timestep2 = prompt("Please enter the timestep2:");
  //   const setback = prompt("Please enter the setback:");
  //   const model = prompt("Please enter the model:");
  //   fetch(
  //     `https://pred-flask-app.herokuapp.com/predictmany/${lab}/${param}/${timestep1}/${timestep2}/${setback}/${model}`,
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       return data[0];
  //     });
  // }

  // console.log(getPredictions());

  return (
    <div className="App">
      <ul className="posts">
        <XYPlot width={800} height={500} margin={{ left: 100 }}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Timestep (hour)" />
          {/* <YAxis title="Temperature" /> */}
          <YAxis title="Humidity (%)" />
          {/* <DiscreteColorLegend items={labLabels} orientation={"horizontal"} /> */}
          {/* {console.log(prepareData(posts))} */}
          <LineMarkSeries
            animation={true}
            curve={"curveMonotoneX"}
            data={prepareData(posts)}
            opacity={1}
            style={{ fill: "none" }}
          />
        </XYPlot>
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
export default LabDataCompare;
