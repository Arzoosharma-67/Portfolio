import React from "react";
import "./Certificate.css";
import P1 from "./assets/pdf1.jpg";
import P2 from "./assets/pdf2.jpg";
import P3 from "./assets/pdf3.jpg";
import P4 from "./assets/pdf4.jpg";
import P5 from "./assets/pdf5.jpg";
import P6 from "./assets/pdf6.jpg";
import P7 from "./assets/pdf7.jpg";
import P8 from "./assets/pdf8.jpg";


const certificateData = [
  {
    name: "Java Programming",
    description: "Completed an advanced Java course with a focus on OOP, data structures, and file handling.",
    img: P1,
  },
  {
    name: "Frontend Development",
    description: "Built responsive web interfaces using HTML, CSS, JavaScript, and React.",
    img: P2,
  },
  {
    name: "Frontend Development",
    description: "Built responsive web interfaces using HTML, CSS, JavaScript, and React.",
    img: P3,
  },
  {
    name: "Frontend Development",
    description: "Built responsive web interfaces using HTML, CSS, JavaScript, and React.",
    img: P4,
  },
  {
    name: "Frontend Development",
    description: "Built responsive web interfaces using HTML, CSS, JavaScript, and React.",
    img: P5,
  },
  {
    name: "Frontend Development",
    description: "Built responsive web interfaces using HTML, CSS, JavaScript, and React.",
    img: P6,
  },
  {
    name: "Frontend Development",
    description: "Built responsive web interfaces using HTML, CSS, JavaScript, and React.",
    img: P7,
  },
  {
    name: "Frontend Development",
    description: "Built responsive web interfaces using HTML, CSS, JavaScript, and React.",
    img: P8,
  }
];

function Certificate() {
  return (
    <div className="certificate-section">
      <h2 className="section-title">My Certificates</h2>
      <div className="cert-scroll-container">
      {certificateData.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img src={cert.img} alt={cert.name} className="certificate-img" />
            <h3>{cert.name}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
