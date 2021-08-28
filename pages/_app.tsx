import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UrqlContainer } from '../components/urql-container'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <UrqlContainer>
      <Component {...pageProps} />
    </UrqlContainer>
}
export default MyApp
