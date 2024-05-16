import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import resume from "../../assets/Sahil_Jagad_Resume copy.pdf";

function HomePage() {
  const navigate = useNavigate();
  const onClickInfo = () => {
    navigate("/about");
  };

  return (
    <div className='container'>
      <div className='hero'>
        <h1 className='hero-text'>Hi, I'm Sahil 👋</h1>
        <div className='hero-buttons'>
          <button
            className='home-button info'
            type='submit'
            onClick={onClickInfo}
          >
            Get to know me!
          </button>
          <a
            className='resume-link home-button resume'
            href={resume}
            target='_blank'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
