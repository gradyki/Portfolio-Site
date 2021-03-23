import "./Home.css";
import LandingCarousel from "../../components/LandingCarousel/LandingCarousel";
import ProjectHome from "../../components/ProjectHome/ProjectHome";
import software from "../../assets/software.jpg";

export default function Home() {
  return (
    <div home-container>
      <div className="home-img1">
        <img src={software} />
      </div>
      <div className="home-projects-container">
        <ProjectHome />
      </div>
      <div className="carousel-container">
        <LandingCarousel />
      </div>
    </div>
  );
}
