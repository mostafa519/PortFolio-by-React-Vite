import React, { useEffect, useState } from "react";

export default function StarBackGround() {
  const [stars, setStars] = useState([]);
  const [starsAnimate, setStarsAnimate] = useState([]);

  useEffect(() => {
    generateStars();
    animateStars();
    const handleResize=()=>{
      generateStars();
    };
    window.addEventListener('resize',handleResize);
    return ()=> window.removeEventListener('resize',generateStars);
  }, []);
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };
  const animateStars = () => {
    const numberOfStars = 10;

    const newmeteor = [];
    for (let i = 0; i < numberOfStars; i++) {
      newmeteor.push({
        id: i,
        size: Math.random() * 2,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setStarsAnimate(newmeteor);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration * 0.5+ "s",
          }}
        />
      ))}
      {starsAnimate.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 5 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            opacity: meteor.opacity,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
}
