import './Video.css';
import VideoContent from './VideoContent/VideoContent';
import VideoSection from './VideoSection/VideoSection';

const Video = () => {

    return (
        <>
        <div className="videom">
            <VideoSection/>
            <VideoContent/>
        </div>
        </>
    );
};
export default Video;