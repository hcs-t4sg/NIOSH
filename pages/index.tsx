import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Feature from '../components/Feature/Feature';
import About from '../components/About/About';

const Index = () => {
  return (
    <Layout pageTitle="T4SG Nextjs">
      <Hero />
      <Feature/>
      <About />
    </Layout>
  )
}
export default Index;
