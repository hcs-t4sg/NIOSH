import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UrqlContainer } from '../components/urql-container'
import 'bootstrap/dist/css/bootstrap.min.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <UrqlContainer>
//       <Component {...pageProps} />
//     </UrqlContainer>
// }
// export default MyApp

import React, { useState } from 'react'
import { Amplify } from "aws-amplify";
import { Auth } from 'aws-amplify'
import awsExports from "../src/aws-exports";
import config from '../src/aws-exports'
import Layout from '../components/Layout/Layout';
import HomePage from './home-page';
import { AmplifyAuthenticator, withAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';

// Amplify.configure(config)
Amplify.configure({ ...awsExports, ssr: true });


const App = () => (
  <AmplifyAuthenticator>
      <Layout />
      <HomePage />
</AmplifyAuthenticator>

  
);

export default withAuthenticator(App);