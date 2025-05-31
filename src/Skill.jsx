import React, { useEffect, useRef, useState } from "react";
import "./Skill.css";

const skillsData = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "React", level: 75 },
  { name: "HTML/CSS", level: 95 },
  { name: "C", level: 70 },
];

function Skill() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className="skills-container" ref={containerRef}>
      <h2 className="MySkilltitle">My Skills</h2>
      {skillsData.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-name">
            {skill.name}
            <span className="skill-percent">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div
              className={`skill-level ${visible ? "grow" : ""}`}
              style={{ "--skill-width": `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skill;
