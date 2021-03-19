import "./About.css";
import me from "../../assets/GradyKing1.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="me">
        <img src={me} />
      </div>
      <div className="about-content">
        <p>
          I am a full stack software engineer with a previous background in
          Technical Recruiting and Account Management. Learning to code and
          solving problems have been hobbies of mine for a few years, so I
          decided to pursue that passion as a career. I have spent the last 8
          years helping bridge the communication gap between development teams
          and the business side of multiple Fortune 500 clients in a variety of
          industries. This along with my passion for learning new technologies
          has me excited for a future working in tech.
        </p>
      </div>
    </div>
  );
}
