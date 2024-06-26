import React, { useState } from "react";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.css";

const Footer = () => {
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletter = async () => {
    try {
      const url = `${process.env.REACT_APP_API}/api/newsletter/`;
      await axios.post(url, { email });
      setSaved(true);
      setEmail("");
      setTimeout(() => {
        setSaved(false);
      }, 2000);
    } catch (error) {
      console.error("Error subscribing to newsletter", error);
    }
  };

  return (
    
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.footercol}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Visit Website</a></li>
          </ul>
        </div>
        <div className={styles.footercol}>
          <h4>Get Help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Learning</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Payment Options</a></li>
          </ul>
        </div>
        <div className={styles.footercol}>
          <h4>Online Classrooms</h4>
          <ul>
            <li><a href="#">Download</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Rooms</a></li>
            <li><a href="#">All Versions</a></li>
          </ul>
        </div>
        <div className={styles.footercol}>
          <h4>Follow Us</h4>
          <div className={styles.sociallinks}>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
