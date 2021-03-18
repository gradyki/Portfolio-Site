import "./Home.css";
import LandingCarousel from "../../components/LandingCarousel/LandingCarousel";
import ProjectHome from "../../components/ProjectHome/ProjectHome";

export default function Home() {
  return (
    <div home-container>
      <div className="carousel-container">
        <LandingCarousel />
      </div>
      <div className="home-projects-container">
        <ProjectHome />
      </div>
    </div>
  );
}
