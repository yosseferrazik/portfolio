"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { Github, Linkedin, Email } from "@/components/icons";

export default function ComingSoon() {
  const t = useTranslations("ComingSoon");

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.card}>
        <span className={styles.badge}>{t("badge")}</span>
        <h1 className={styles.title}>Yossef Errazik</h1>
        <h2 className={styles.heading}>{t("title")}</h2>
        <p className={styles.description}>{t("description")}</p>

        <div className={styles.links}>
          <a
            className="button"
            href="https://github.com/yosseferrazik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            GitHub
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/yosseferrazik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
            LinkedIn
          </a>
          <a className="button button-primary" href="mailto:yosseferrazik@gmail.com">
            <Email />
            {t("email")}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
