import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";
import About from "../components/About/About";
import Compare from "../components/Compare/Compare";
import LabDataView from "../components/LabDataView/LabDataView";
import HomePage from "./home-page"
import Button from '@mui/material/Button';
import { Amplify } from "aws-amplify";
import { Auth } from 'aws-amplify'
import awsExports from "../src/aws-exports";
import config from '../src/aws-exports'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// Amplify.configure(config)
Amplify.configure({ ...awsExports, ssr: true });



// const Index = () => {
//   return (
//     <Layout pageTitle="T4SG Nextjs">
//       <div className="shadow-lg p-3 mb-5 bg-light rounded">
//         <h3 className="font-weight-normal text-dark">
//           {" "}
//           <span className="t4sg-color"> Lab Selector</span>
//         </h3>
//       </div>
//       <HomePage />
//     </Layout>
//   );
// };
// export default Index;
