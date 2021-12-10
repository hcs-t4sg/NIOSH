{/* Main page that displays lab data given a date and a specific HVAC lab*/}

import * as React from 'react';
import { Container } from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, ChartLabel, VerticalGridLines, LineMarkSeries, LineSeries} from 'react-vis';
import LabDataView from "../components/LabDataView/LabDataView";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Link from 'next/link'

const HomePage: React.FC = (props) => {

  return (
    <>
    <Container>
      <LabDataView/> 

      {/* <Box m = {5}> 
        Homepage
      </Box>   */}
   

    </Container>
    </>
  );
};
export default HomePage;



// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { Auth } from 'aws-amplify';

// export default function Home({ updateAuthState }: any) {
//   async function signOut() {
//     try {
//       await Auth.signOut();
//       updateAuthState('loggedOut');
//     } catch (error) {
//       console.log('Error signing out: ', error);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text>  + </Text>
//       <Button title="Sign Out" color="tomato" onPress={signOut} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 20
//   }
// });