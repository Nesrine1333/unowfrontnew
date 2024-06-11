import React, { useState } from "react";
import styles from "./styles.module.css";
import Group from "../../assets/Group.png";
import Up from "../../assets/Illustration.png";

const UpSkill = () => {
  const [openGet, setOpenGet] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  return (
    <div className={styles.allContainer}>
      <div className={styles.imageWrapper}>
        <img src={Group} alt="GroupImage" className={styles.image} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.title}>Up-skill your business with u!now</div>
          <p className={styles.paragraph}>
            As part of our professional training activity, we are constantly
            looking for new
            <br />
            consultant trainers.
          </p>
        </div>
        <div>
        <button
          onClick={() => {
            setOpenGet(true);
          }}
          className={styles.moreButton}
        >
          Get Started
        </button>
        <button
          onClick={() => {
            setOpenMore(true);
          }}
          className={styles.moreButton}
        >
          Learn More
        </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
          marginBottom: 40,
          alignItems: "center",
          position: "relative",
        }}
      >
     
      </div>
      <div className={styles.finalWrapper}>
        <img src={Up} alt="GroupImage" className={styles.image} />
      </div>
    </div>
  );
};

export default UpSkill;
