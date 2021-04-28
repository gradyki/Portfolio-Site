import "./LandingTitle.css";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";

export default function LandingTitle(props) {
  return (
    <div className="landing-title">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1500)
            .typeString("React/Full Stack Developer")
            .pauseFor(3500)
            .deleteAll()
            .typeString("NodeJS/Express/MongoDb")
            .pauseFor(3500)
            .deleteAll()
            .typeString("Ruby on Rails/SQL")
            .start();
        }}
      />
    </div>
  );
}
