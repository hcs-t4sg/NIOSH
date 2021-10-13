import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Feature from '../components/Feature/Feature';
import About from '../components/About/About';
import Compare from "../components/Compare/Compare";
import LabDataView from "../components/LabDataView/LabDataView";
import HomePage from "../pages/home-page"
import Button from '@mui/material/Button';

const Index = () => {
  return (
    <Layout pageTitle="T4SG Nextjs">
      
      <HomePage/>      
    </Layout>
  )
}
export default Index;
