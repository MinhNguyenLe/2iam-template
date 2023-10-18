import { motion } from "framer-motion";

import { EducationCard } from "../../components/EducationCard/EducationCard";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./experience.module.scss";
import { useContext } from "react";
import { GlobalData } from "../../GlobalData";

const eduOpen = "<experience>";
const eduClose = "</experience>";

const Experience = () => {
  const data = useContext(GlobalData);

  return (
    <div className={styles.education}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.eduOpen}>{eduOpen}</h3>
          <div className={styles.center_line}></div>
          {data?.experience?.map((item: any, index: number) => (
            <EducationCard
              key={item.title}
              title={item.title}
              date={item.date}
              details={item.details}
              isLeft={index % 2 === 0 ? true : false}
            />
          ))}
          <h3 className={styles.eduClose}>{eduClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
