import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [toggleClasses, setToggleClasses] = useState("true");
  console.log("toggle", toggleClasses);

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h3>Grady King</h3>
        </Link>
      </div>

      <ul className={toggleClasses ? "nav-links" : "nav-active"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="burger" onClick={() => setToggleClasses((prev) => !prev)}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
}
