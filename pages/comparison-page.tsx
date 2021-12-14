import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Feature from '../components/Feature/Feature';
import About from '../components/About/About';
import Compare from "../components/Compare/Compare";
import LabDataView from "../components/LabDataView/LabDataView";

const Index = () => {
  return (
    <Layout pageTitle="T4SG Nextjs">
      <div className="shadow-lg p-3 mb-5 bg-light rounded">
        <h3 className="font-weight-normal text-dark"> <span className="t4sg-color"> Lab Comparison</span></h3>
      </div>
      <Compare/>
    </Layout>
    

  )
}
export default Index;
