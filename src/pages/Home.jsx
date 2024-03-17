
import Navbar from '../component/Navbar/Navbar'
import MainBanner from '../component/MainBanner/MainBanner'
import Featured from '../component/Featured/Featured'
import FunFacts from '../component/FunFacts/FunFacts'
import BestDeal from '../component/BestDeal/BestDeal'


const Home = () => {


    return (
        <div className="Home">
          <MainBanner/>
          <Featured/>
          <FunFacts/>
          <BestDeal/>
        </div>
      );

}

export default Home