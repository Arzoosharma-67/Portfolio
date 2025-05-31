// HobbyGrid.jsx
import { FaMusic, FaUtensils, FaCamera } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";

import "./Hb1.css";

const hobbies = [
  { icon: <FaMusic />, name: "Music", desc: "Soothing and energetic tracks" },
  { icon: <FaUtensils />, name: "Cooking", desc: "Experiment with new recipes" },
  { icon: <FaCamera />, name: "Photography", desc: "Nature & street photography" },
  { icon: <MdOutlineTravelExplore />, name: "Travelling", desc: "Love exploring new destinations" },
];

const Hb1 = () => (
  <div className="grid-container">
    {hobbies.map((hobby, i) => (
      <div className="grid-item" key={i}>
        {hobby.icon}
        <div className="tooltip">{hobby.desc}</div>
      </div>
    ))}
  </div>
);

export default Hb1;
