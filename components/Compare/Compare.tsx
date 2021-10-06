import React, { useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";


const Compare = () => {
  const categories = ["Lab1","Lab2","Lab3"];
  const parameters = ["Humidity","Temperature",];
  const information = ["Windows","Floor"]
  const [status, setStatus] = useState<string | null>(null);
  const [status2, setStatus2] = useState<string | null>(null);
  const [param, setParam] = useState<string | null>(null);
  const [otherinfo, setOtherInfo] = useState<string | null>(null);
  var temphum = ""


  return (
    <section className="section position-relative">
      
      <Container>
        <FormControl>
            <InputLabel id="category-select-label">Lab</InputLabel>
            <Select
              labelId="category-select-label"
              value = {status}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setStatus(event.target.value as string);
              }}
            > 
              {categories.map((category, index) => {
                return <MenuItem key={index} value={index}> {category} </MenuItem>
              })}
        
            </Select>
          </FormControl>
          
          <FormControl>
            <InputLabel id="category-select-label">Lab</InputLabel>
            <Select
              labelId="category-select-label"
              fullWidth
              value = {status2}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setStatus2(event.target.value as string);
              }}
            > 
              {categories.map((category, index) => {
                return <MenuItem key={index} value={index}> {category} </MenuItem>
              })}
            </Select>
          </FormControl>

          <Row> 
            <Col>  
        
            <h3 className="font-weight-normal t4sg-color text-center">
              Lab {status + 1} results: 
            </h3> 
           
            </Col>

            <Col>  
          
            <h3 className="font-weight-normal t4sg-color text-center">
              Lab {status2 + 1} results: 
            </h3> 
             
            </Col>
         
            
          </Row>

      </Container>

      <Container>
        <FormControl fullWidth>
            <InputLabel id="category-select-label">Parameters</InputLabel>
            <Select
              labelId="category-select-label"
              value = {param}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setParam(event.target.value as string);
              }}
             
            > 
              {parameters.map((parameter, index) => {
                return <MenuItem key={index} value={index}> {parameter} </MenuItem>
              })}
            </Select>
            
            <Row> 
              <h1> {'     '}</h1>
              <h5 className="text-center"> Displaying predictions for: {param} </h5> </Row>



        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="category-select-label">Other Information</InputLabel>
            <Select
              labelId="category-select-label"
              value = {otherinfo}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setOtherInfo(event.target.value as string);
              }}
            > 
              {information.map((info, index) => {
                return <MenuItem key={index} value={index}> {info} </MenuItem>
              })}
            </Select>
          </FormControl>
          <Row> 
             <h1> {'     '}</h1>
              <h5 className="text-center"> Lab {status + 1}: {otherinfo} </h5> </Row>
          <Row>   <h5 className="text-center"> Lab {status2 + 1}: {otherinfo} </h5> </Row>
      </Container>
      <Container>
     
      </Container>
    </section>
  );
}
export default Compare;