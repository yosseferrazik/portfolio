"use client";

import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { Github, Email, Linkedin } from "@/components/icons";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export default function Home() {
  const t = useTranslations("Home");

  return (
    <motion.div
      className={styles.hero}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles.heroContent}>
        <h1>
          Yossef Errazik{" "}
          <span className={styles.jobStatus}>{t("hero.jobStatus")}</span>
        </h1>
        <h2 className={styles.heroTitle}>{t("hero.title")}</h2>

        <br />

        {/* Descripción principal */}
        <p>{t("hero.description")}</p>

        <br />

        <p className={styles.heroIntro}>{t("intro.text")}</p>

        <div className={styles.socialLinks}>
          <button className="button">
            <Github />
            &nbsp;GitHub
          </button>
          <button className="button">
            <Linkedin />
            &nbsp;Linkedin
          </button>
          <button className="button">
            <Email />
            &nbsp;Email
          </button>
        </div>
      </div>

      <div className={styles.heroImage}>
        <img
          src="https://placehold.co/900x600"
          alt="Yossef Errazik"
          style={{ borderRadius: "10px" }}
        />
      </div>
    </motion.div>
  );
}
