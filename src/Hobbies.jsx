import HobbyCard from "./HobbyCard";
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

function Hobbies() {
  const hobbies = [
    {
      phrase: "Framing Memories ✨",
      imageSrc: img2, 
    },
    {
      phrase: "Nature Speaks in Silence 🌿",
      imageSrc: img1,
    },
    {
      phrase: "Every Click Tells a Story 📷",
      imageSrc: img3,
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {hobbies.map((item, i) => (
        <HobbyCard key={i} {...item} />
      ))}
    </div>
  );
}

export default Hobbies;
