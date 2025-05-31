import "./MoveTag.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaReact,
  FaPython,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

const techIcons =  [
  { icon: FaHtml5, color: "#e34c26" },
  { icon: FaCss3Alt, color: "#264de4" },
  { icon: FaJsSquare, color: "#f0db4f" },
  { icon: FaJava, color: "#f89820" },
  { icon: FaReact, color: "#61DBFB" },
  { icon: FaNodeJs, color: "#3C873A" },
  { icon: FaPython, color: "#3776AB" },
  { icon: FaGitAlt, color: "#F1502F" },
  { icon: FaGithub, color: "#ffffff" },
  { icon: FaDatabase, color: "#4DB33D" },
];

function MoveTag() {
  return (
    <div className="slider-wrapper">
      <div className="tech-slider">
        {[...techIcons, ...techIcons].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <Icon
              key={index}
              style={{ color: tech.color }}
              size={50}
              className="tech-icon"
            />
          );
        })}
      </div>
    </div>
  );
}

export default MoveTag;
