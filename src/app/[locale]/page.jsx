"use client";

import { useLocale, useTranslations } from "next-intl";
import styles from "./page.module.css";
import { Github, Email, Linkedin, Work } from "@/components/icons";
import { motion } from "framer-motion";
import Image from "next/image";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const cvHref = locale === "es" ? "/cv_es.pdf" : "/cv_en.pdf";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yossef Errazik",
    url: "https://yosseferrazik.com",
    jobTitle: "Software Developer",
    sameAs: [
      "https://github.com/yosseferrazik",
      "https://www.linkedin.com/in/yosseferrazik/",
    ],
  };

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

        <p>{t("hero.description")}</p>
        <p className={styles.heroIntro}>{t("intro.text")}</p>

        <div className={styles.socialLinks}>
          <a
            className="button"
            href="https://github.com/yosseferrazik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            {t("actions.github")}
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/yosseferrazik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
            {t("actions.linkedin")}
          </a>
          <a
            className="button button-primary"
            href="mailto:contacto@yosseferrazik.com"
          >
            <Email />
            {t("actions.email")}
          </a>
          <a className="button" href={cvHref} download={`yossef-errazik-cv-${locale}.pdf`}>
            <Work />
            {t("actions.downloadCv")} ({locale.toUpperCase()})
          </a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image
          src="/landscape.webp"
          alt={t("hero.imageAlt")}
          width={900}
          height={600}
          priority
          style={{ borderRadius: "10px", width: "100%", height: "auto" }}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </motion.div>
  );
}
