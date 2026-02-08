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
  return (
    <motion.div
      className={styles.projects}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Projects</h1>
      <p>Here are some projects</p>
      <div className={styles.projectsContainer}>
        <article className={styles.projectCard}>
          <div>
            <span>Name</span>
            <p>Short description</p>
            <div className={styles.tags}>
              <span>HTML</span> <span>CSS</span>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <button className="button">
              <Github />
            </button>
            <button className="button">
              <ArrowRight />
            </button>
          </div>
        </article>
        <article className={styles.projectCard}>
          <div>
            <span>Name</span>
            <p>Short description</p>
            <div className={styles.tags}>
              <span>HTML</span> <span>CSS</span>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <button className="button">
              <HyperLink />
            </button>
            <button className="button">
              <Github />
            </button>
            <button className="button">
              <ArrowRight />
            </button>
          </div>
        </article>{" "}
        <article className={styles.projectCard}>
          <div>
            <span>Name</span>
            <p>Short description</p>
            <div className={styles.tags}>
              <span>HTML</span> <span>CSS</span>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <button className="button">
              <Github />
            </button>
            <button className="button">
              <ArrowRight />
            </button>
          </div>
        </article>
        <button className="button">View more on GitHub</button>
      </div>
    </motion.div>
  );
};

export default Projects;
