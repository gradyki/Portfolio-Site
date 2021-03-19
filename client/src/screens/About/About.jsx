import "./About.css";
import me from "../../assets/GradyKing1.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="me">
        <img src={me} />
      </div>
    </div>
  );
}
