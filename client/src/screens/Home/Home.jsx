import "./Home.css";
import LandingTitle from "../../components/LandingTitle/LandingTitle";
import LandingCarousel from "../../components/LandingCarousel/LandingCarousel";
import ProjectHome from "../../components/ProjectHome/ProjectHome";
import software from "../../assets/software.jpg";

export default function Home() {
  return (
    <div home-container>
      <div className="home-img1">
        <div className="title-container">
          <LandingTitle />
        </div>
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
