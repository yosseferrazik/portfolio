"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Code2, Server, Shield, Cloud, Database, Terminal } from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const iconMap = {
  code: Code2,
  server: Server,
  cloud: Cloud,
  database: Database,
  shield: Shield,
  terminal: Terminal,
};

const Experience = () => {
  const t = useTranslations("Experience");
  const competencies = t.raw("competencies");
  const featuredSkills = new Set(t.raw("featuredSkills"));
  const timelineItems = t.raw("timeline");

  return (
    <motion.div
      className={styles.experience}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>{t("title")}</h1>

      <h2>{t("areasTitle")}</h2>
      <div className={styles.competenciesGrid}>
        {competencies.map((category, index) => {
          const Icon = iconMap[category.icon] || Code2;

          return (
            <div key={index} className={styles.competencyCategory}>
              <div className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>
                  <Icon size={20} />
                </span>
                {category.title}
              </div>
              <div className={styles.competencyList}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`${styles.competencyTag} ${featuredSkills.has(skill) ? styles.highlight : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <h2>{t("timelineTitle")}</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>

        <div className={styles.timelineItemContainer}>
          {timelineItems.map((item, index) => (
            <article key={index} className={styles.timelineArticle}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineItem}>
                <div className={styles.date}>{item.date}</div>
                <div className={styles.position}>{item.position}</div>
                <div className={styles.org}>{item.org}</div>
                <div className={styles.modality}>{item.modality}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
