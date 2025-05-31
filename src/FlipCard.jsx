import { FaVolumeUp, FaCloudSun, FaLaptopCode } from "react-icons/fa";
import "./FlipCard.css";

const projects = [
  {
    icon: <FaVolumeUp />,
    title: "Volume Control Using Hand Gestures",
    tech: "Python, OpenCV, MediaPipe",
    summary: "Control system volume using real-time hand gestures captured through webcam.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Portfolio Website",
    tech: "React, HTML, CSS",
    summary: "Personal responsive portfolio with animated sections, showcasing skills and projects.",
  },
  {
    icon: <FaCloudSun />,
    title: "Weather App",
    tech: "React, OpenWeather API",
    summary: "Displays real-time weather info for searched cities using external API.",
  },
];

const FlipCard = () => (
  <div className="project-section">
    <h2>My Projects</h2>
    <div className="project-grid">
      {projects.map((project, i) => (
        <div className="project-card" key={i}>
          <div className="project-icon">{project.icon}</div>
          <h3>{project.title}</h3>
          <p className="tech">{project.tech}</p>
          <p className="summary">{project.summary}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FlipCard;
