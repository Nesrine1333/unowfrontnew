import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Ichraf from "../ImageIchraf.png";

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Data = [
    {
      name: "Amira Bacha",
      description: "Développeur OS",
      image: Ichraf,
    },
    {
      name: "Ameni Bacha",
      description: "Développeur OS",
      image: Ichraf,
    },
    {
      name: "Nezha Okan",
      description: "Développeur OS",
      image: Ichraf,
    },
    {
      name: "Oussama",
      description: "CO",
      image: Ichraf,
    },
    {
      name: "Lamia",
      description: "CO",
      image: Ichraf,
    },
    {
      name: "Zied",
      description: "CO",
      image: Ichraf,
    },
    {
      name: "Ahmed",
      description: "CO",
      image: Ichraf,
    },
    {
      name: "Sarra",
      description: "CO",
      image: Ichraf,
    },
  ];

  const [WindowWidth, setWindowWidth] = useState(0);
  const handleWidthChange = () => {
    const currentWidth = window.innerWidth;
    setWindowWidth(currentWidth);
  };
  // const itemsPerPage = 4;
  useEffect(() => {
    handleWidthChange();
    window.addEventListener("resize", handleWidthChange);
    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);
  const[itemsPerPage,setItemsPerPage] =useState(4);
  
  useEffect(() => {
    //console.log(WindowWidth)
    if (WindowWidth <= 817) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(4);
    }
  }, [WindowWidth]);
  
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= Data.length ? 0 : prevIndex + itemsPerPage
    );
  };
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Data.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };
  const currentData = Data.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      <div className={styles.featuredTitle} style={{ textAlign: "left" }}>
        Featured Trainers
      </div>
      <div className={styles.featuredContainer}>
        <div className={styles.cardsWrapper}>
          <button onClick={prev} className={styles.navButton}>
            {"<"}
          </button>
          <div className={styles.cardsContainer}>
            {currentData.map((e) => (
              <div className={styles.card} key={e.name}>
                <div className={styles.imageWrapper}>
                  <img
                    src={e.image}
                    alt={e.name}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.titleName}>{e.name}</h3>
                  <p className={styles.description}>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={next} className={styles.navButton}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Featured;
