import "./Home.css";
import LandingCarousel from "../../components/LandingCarousel/LandingCarousel";
import ProjectHome from "../../components/ProjectHome/ProjectHome";
import software from "../../assets/software.jpg";

export default function Home() {
  return (
    <div home-container>
      <div className="home-img">
        <img src={software} />
      </div>
      <div className="carousel-container">
        <LandingCarousel />
      </div>
      <div className="home-projects-container">
        <ProjectHome />
      </div>
    </div>
  );
}
