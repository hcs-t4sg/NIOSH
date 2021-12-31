import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UrqlContainer } from "../components/urql-container";
import "bootstrap/dist/css/bootstrap.min.css";
import Compare from "../components/Compare/Compare";
import Layout from "../components/Layout/Layout";

import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {
  AmplifyAuthenticator,
  withAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: false });

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <UrqlContainer>
//       <Component {...pageProps} />
//     </UrqlContainer>
//   );
// }

function App({ Component, pageProps }: AppProps) {
  return (
    <AmplifyAuthenticator>
      <UrqlContainer>
        <Layout />
        <Component {...pageProps} />
        {/* <AmplifySignOut /> */}
      </UrqlContainer>
    </AmplifyAuthenticator>
  );
}

export default withAuthenticator(App);

// export default MyApp;
