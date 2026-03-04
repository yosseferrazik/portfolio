"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { Mail, Github, Linkedin, Pin } from "@/components/icons";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  pin: Pin,
};

const Contact = () => {
  const t = useTranslations("Contact");
  const contactInfo = t.raw("items");

  return (
    <motion.div
      className={styles.contact}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>

      <div className={styles.contactMethods}>
        {contactInfo.map((item, index) => {
          const Icon = iconMap[item.icon] || Mail;

          return (
            <div key={index} className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <Icon />
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.contactTitle}>{item.title}</div>
                <div className={styles.contactDetail}>{item.detail}</div>
              </div>

              {item.action && (
                <a
                  href={item.action}
                  target={item.action.startsWith("http") ? "_blank" : "_self"}
                  rel={item.action.startsWith("http") ? "noopener noreferrer" : ""}
                  className="link"
                >
                  {item.buttonText}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Contact;
