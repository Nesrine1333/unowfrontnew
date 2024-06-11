import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Icon from "../../assets/Icon.png";

const Categories = () => {
  const cardData = [
    {
      name: "Web Development",
      image: Icon,
      style: { backgroundColor: "#FDF4A8" },
    },
    {
      name: "Web",
      image: Icon,
      style: { backgroundColor: "#D9EAD0" },
    },
    {
      name: "Devops",
      image: Icon,
      style: { backgroundColor: "#FBE4EE" },
    },
    {
      name: "React",
      image: Icon,
      style: { backgroundColor: "#FAC2B5" },
    },
    {
      name: "Angular",
      image: Icon,
      style: { backgroundColor: "#FAC2B5" },
    },
    {
      name: "Jest",
      image: Icon,
      style: { backgroundColor: "#DAF1FC" },
    },
    {
      name: "Web Pack",
      image: Icon,
      style: { backgroundColor: "#E9C1C9" },
    },
    {
      name: "IA",
      image: Icon,
      style: { backgroundColor: "#C9B9D9" },
    },
  ];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const cardsToShow = screenWidth < 1390 ? cardData.slice(0, 6) : cardData;
  return (
    <div className={styles.categorieContainer}>
      <div className={styles.categorieTitle}>CATEGORIES</div>
      <div className={styles.cardsContainer}>
        {cardsToShow.map((card, index) => (
          <div key={index} className={styles.card} style={card.style}>
            <img src={card.image} alt="" className={styles.cardImage} />
            <p className={styles.titleName}>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
