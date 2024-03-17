import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHeart  } from "react-icons/fa";
import './VideoContent.css';
import videoframe from '../../images/video-frame.jpg';

const VideoContent = () => {

    return (
        <>
  <div className="video-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="video-frame">
            <img src={videoframe} alt="videoframe" />
            <a href="https://youtube.com" target="_blank">
            <FaHeart /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
    );
};
export default VideoContent;