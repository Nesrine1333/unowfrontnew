import React, { useState } from "react";
import styles from "./styles.module.css";
import Scrum from "../../assets/partners/scrum.png";
import Peoplecert from "../../assets/partners/Peoplecert.svg";
import Axelos from "../../assets/partners/axelos.png";
import DevOps from "../../assets/partners/devOps Institute.png";
import Exin from "../../assets/partners/exin.svg";
import PMI from "../../assets/partners/pmi_new_logo.png";
import SAFe from "../../assets/partners/SAFe.png";
import Consultant from "../../assets/Consultant.png";
import Team from "../../assets/team.png";
import Ellipse from "../../assets/Ellipse.png";

const About = () => {
  const [openApply, setOpenApply] = useState(false);
  return (
    <>
      <div className={styles.dernierSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutTitle}>ABOUT US</div>
          <div className={styles.container}>
            <h1 className={styles.title}>U!NOW</h1>
            <p className={styles.subtitle}>
              <b>an innovative, holistic e-learning platform</b>
            </p>
            <p className={styles.description}>
              U!NOW is not just an e-learning platform, but a revolution in the
              field of education.
              <br />
              Our ambition is to make learning accessible, flexible, engaging
              and effective for
              <br />
              everyone, from students and retraining professionals to companies
              and training
              <br />
              organizations.
              <br />
              Pedagogical innovation at the heart of U!NOW
              <br />
              U!NOW stands out for its innovative pedagogical approach, which
              draws on the
              <br />
              latest technologies and best practices in learning.
            </p>

            <div>
              <button
                onClick={() => {
                  setOpenApply(true);
                }}
                className={styles.readButton}
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src={Team} alt="" className={styles.imageAboutUs} />
        </div>
      </div>
      <section>
        <div className={styles.aboutContainer}>
          <div className={styles.collaborateTitle}>WE COLLABORATE WITH</div>
          <div className={styles.ourPartners}>
            <div
              className={styles.ourPartners_container}
              style={{ overflowX: "scroll" }}
            >
              <div>
                <img src={Scrum} alt="" />
              </div>
              <div>
                <img src={Peoplecert} alt="" />
              </div>
              <div>
                <img src={Axelos} alt="" />
              </div>
              <div>
                <img src={DevOps} alt="" />
              </div>
              <div>
                <img src={Exin} alt="" />
              </div>
              <div>
                <img src={PMI} alt="" />
              </div>
              <div>
                <img src={SAFe} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.consultantSection}>
        <div
        // style={{ backgroundColor: "red" }}
        >
          <img src={Consultant} alt="" className={styles.imageConsultant} />
        </div>
        <div className={styles.allParaghraphe}>
          <div className={styles.consultantsTitle}>CONSULTANTS - TRAINERS</div>
          <div style={{ textAlign: "center" }}>
            <h3
              className={styles.title}
              // style={{ textAlign: "center", marginBottom: 20 }}
            >
              JOIN US!
            </h3>

            <p className={styles.descriptionParagh}>
              As part of our professional training activity, we
              <br />
              are constantly looking for new consultant
              <br />
              trainers.
            </p>
          </div>
          <div className={styles.button}>
            <button
              onClick={() => {
                setOpenApply(true);
              }}
              className={styles.applyButton}
            >
              Apply Now !
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
