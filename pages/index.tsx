import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Feature from '../components/Feature/Feature';
import About from '../components/About/About';
import Compare from "../components/Compare/Compare";

const Index = () => {
  return (
    <Layout pageTitle="T4SG Nextjs">
      <h1 className = "font-weight-normal text-center"> Lab Comparison </h1>
      <Compare/>
      <About />
    </Layout>
  )
}
export default Index;
