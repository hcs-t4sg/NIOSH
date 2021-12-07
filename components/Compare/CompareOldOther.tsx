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

interface CompareProps {
  lab1: string;
  lab2: string;
  startDate: Date | null;
  endDate: Date | null;
}

export type LabCategory = {
  lab: string;
  temperature: number;
};

const CompareGraphs: React.FC<CompareProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
    console.log(labsData);
    parseData(labsData);
  }

  function parseData(data) {
    var lab1_hum_arr = [];
    var lab1_temp_arr = [];
    var lab2_hum_arr = [];
    var lab2_temp_arr = [];
    var hour = 0;

    for (let entry of data.observations) {
      if (entry.lab == props.lab1) {
        var hour = new Date(entry.time).getTime();
        if (hour > new Date(startDate).getTime()) {
          if (hour < new Date(endDate).getTime()) {
            lab1_hum_arr.push({ x: hour, y: entry.humidity });
            lab1_temp_arr = lab1_temp_arr.concat({
              x: hour,
              y: entry.temperature,
            });
          }
        }
      }
      if (entry.lab == props.lab2) {
        var hour = new Date(entry.time).getTime();
        if (hour > new Date(startDate).getTime()) {
          if (hour < new Date(endDate).getTime()) {
            lab2_hum_arr = lab2_hum_arr.concat({ x: hour, y: entry.humidity });
            lab2_temp_arr = lab2_temp_arr.concat({
              x: hour,
              y: entry.temperature,
            });
          }
        }
      }
    }
    set_labhum1(lab1_hum_arr);
    set_labtemp1(lab1_temp_arr);
    set_labhum2(lab2_hum_arr);
    set_labtemp2(lab2_temp_arr);
    console.log(lab1_hum_arr);
  }

  const lab1 = "H353";

  const labQuery1 =
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
    query: labQuery1,
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
    // parseData(data);
  }

  const handleClose = () => {
    setAnchorEl(null);
    const index = Math.floor(Math.random() * 4);
    var hour = 0;
  };

  return "test";
};
export default CompareGraphs;
