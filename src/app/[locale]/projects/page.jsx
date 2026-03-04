"use client";
import React from "react";
import styles from "./page.module.css";
import { ArrowRight, Github, HyperLink } from "@/components/icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Projects = () => {
  const t = useTranslations("Projects");
  const projects = t.raw("items");

  return (
    <motion.div
      className={styles.projects}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <article key={project.name} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className={styles.linkContainer} aria-label={t("actions.aria")}>
              {project.demoUrl && (
                <a
                  className="button"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("actions.viewDemo")}
                  title={t("actions.viewDemo")}
                >
                  <HyperLink />
                </a>
              )}
              {project.codeUrl && (
                <a
                  className="button"
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("actions.viewCode")}
                  title={t("actions.viewCode")}
                >
                  <Github />
                </a>
              )}
              <a
                className="button"
                href={project.detailsUrl || project.demoUrl || project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("actions.viewDetails")}
                title={t("actions.viewDetails")}
              >
                <ArrowRight />
              </a>
            </div>
          </article>
        ))}

        <a
          className="button"
          href="https://github.com/yosseferrazik"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("cta")}
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
