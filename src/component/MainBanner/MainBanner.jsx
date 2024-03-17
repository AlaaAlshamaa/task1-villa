
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './MainBanner.css'
import banner1 from '../../assets/images/banner-01.jpg';
import banner2 from '../../assets/images/banner-02.jpg';
import banner3 from '../../assets/images/banner-03.jpg';

const MainBanner = () => {
    const dataSlide = [
        {
            image: banner1 ,
            country: "Canada",
            city: "Toronto",
            text1:"Hurry!",
            text2:"Get the Best Villa for you"
        } , 
        {
            image: banner2 ,
            country: "Australia",
            city: "Melbourne",
            text1:"Be Quick!",
            text2:"Get the best villa in town"
        },
        {
            image: banner3 ,
            country: "South Florida",
            city: "Miami",
            text1:"Act Now!",
            text2:"Get the highest level penthouse"
        }
    ];

    return (
        <div className="slide-container">
        <Slide>
            {dataSlide.map((element, index)=> (
            <div key={index}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${element.image})` }}>
                    <span className="category">{element.city}, <em>{element.country}</em></span>
                    <h2>{element.text1}<br/>{element.text2}</h2>
                </div>
            </div>
            </div>
            ))}
        </Slide>
        </div>
    );
};

export default MainBanner;