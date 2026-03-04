"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const About = () => {
  const t = useTranslations("About");
  const interests = t.raw("interests");

  return (
    <motion.div
      className={styles.about}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>{t("title")}</h1>

      <div className={styles.aboutSection}>
        <p>{t("summary.p1")}</p>
        <p>{t("summary.p2")}</p>
      </div>

      <h2>{t("interestsTitle")}</h2>
      <div className={styles.hobbyGrid}>
        {interests.map((item, index) => (
          <div key={index} className={styles.hobbyCard}>
            <div className={styles.hobbyTitle}>{item.title}</div>
            <div className={styles.hobbyDescription}>{item.description}</div>
            <span className={styles.hobbyTag}>{item.tag}</span>
          </div>
        ))}
      </div>

      <div className={styles.aboutSection}>
        <h2>{t("workStyleTitle")}</h2>
        <p>{t("workStyleText")}</p>
      </div>
    </motion.div>
  );
};

export default About;
