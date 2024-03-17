
import './BestDeal.css'
import Heading from './Heading/Heading';
import Tabs3 from './Tabs3/Tabs3';


const BestDeal = () => {
  return (
    <div className="section bestdeal">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
        <Heading/>
        </div>
        <div className="col-lg-12">
            <Tabs3/>
        </div>
      </div>
    </div>
  </div>

  )
}

export default BestDeal;