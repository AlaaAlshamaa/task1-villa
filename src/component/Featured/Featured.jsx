import './Featured.css';
import featured from '../../assets/images/featured.jpg';
import featuredicon from '../../assets/images/featured-icon.png';
import Accordions from './Accordion/Accordions';
import Table from './Table/Table';

const Featured = () => {
    return (
        <>
<div className="featured">
<div className="container">
  <div className="row">
    <div className="col-lg-4">
      <div className="left-image">
      <img src={featured} alt="featured" />
        <a><img src={featuredicon} alt="featuredicon" /></a>
      </div>
    </div>
    <div className="col-lg-5">
      <div className="section-heading">
        <h6>| Featured</h6>
        <h2>Best Appartment &amp; Sea view</h2>
      </div>
      <Accordions/>
    </div>
    <div className="col-lg-3">
      <Table/>
    </div>
    </div>
  </div>
</div>

</>
    );
};
export default Featured;