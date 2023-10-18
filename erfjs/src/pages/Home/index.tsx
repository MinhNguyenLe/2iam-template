const Zoom = require("react-reveal/Zoom");

import styles from "./home.module.scss";
import profilePic from "../../assets/profile.png";

import { useContext } from "react";
import { GlobalData } from "../../GlobalData";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const Home = () => {
  const data = useContext(GlobalData);

  return (
    <div className={styles.home}>
      <Zoom cascade>
        <img src={profilePic} alt="Profile" className={styles.image} />
        <h2 className={styles.title}>{data.about_me.say_hi}</h2>
      </Zoom>
      <Zoom cascade>
        <h3 className={styles.about}>{data.about_me.about_1}</h3>
        <h3 className={styles.about_next}>{data.about_me.about_2}</h3>
        <div className={styles.links}>
          <a
            href={data.about_me.social_link.github}
            target="_blank"
            rel="noreferrer"
            key="GitHub"
          >
            <ImGithub color="#000000dc" />
          </a>
          <a
            href={data.about_me.social_link.linkedIn}
            target="_blank"
            rel="noreferrer"
            key="LinkedIn"
          >
            <ImLinkedin color="#000000dc" />
          </a>
          <a
            href={data.about_me.social_link.twitter}
            target="_blank"
            rel="noreferrer"
            key="Twitter"
          >
            <FaTwitter color="#000000dc" />
          </a>
          <a
            href={data.about_me.social_link.instagram}
            target="_blank"
            rel="noreferrer"
            key="Instagram"
          >
            <SiInstagram color="#000000dc" />
          </a>
        </div>
      </Zoom>
    </div>
  );
};

export default Home;
