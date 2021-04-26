import "./LandingTitle.css";
import Fade from "react-reveal/Fade";

export default function LandingTitle(props) {
  return (
    <div className="landing-title">
      <Fade left cascade>
        <div>
          <h2>React Developer</h2>
        </div>
      </Fade>
    </div>
  );
}
