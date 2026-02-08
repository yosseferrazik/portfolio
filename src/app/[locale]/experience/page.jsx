"use client";
import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Code2, Server, Shield, Cloud, Database, Terminal } from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Experience = () => {
  const competencies = [
    {
      icon: <Code2 size={20} />,
      title: "Desarrollo de Software",
      skills: [
        "React/Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Rust",
        "Git",
        "Docker",
        "CI/CD",
      ],
    },
    {
      icon: <Server size={20} />,
      title: "Administración de Sistemas",
      skills: [
        "Linux Server",
        "Windows Server",
        "Bash Scripting",
        "Virtualización",
        "Containers",
        "Monitoring",
      ],
    },
    {
      icon: <Cloud size={20} />,
      title: "Infraestructura Cloud",
      skills: [
        "AWS",
        "Azure",
        "Terraform",
        "Kubernetes",
        "Networking",
        "Load Balancing",
        "Auto-scaling",
      ],
    },
    {
      icon: <Database size={20} />,
      title: "Bases de Datos",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Optimización",
        "Backups",
        "Replicación",
      ],
    },
    {
      icon: <Shield size={20} />,
      title: "Seguridad y Redes",
      skills: [
        "Firewalls",
        "VPN",
        "SSL/TLS",
        "Hardening",
        "Auditoría",
        "Ciberseguridad",
        "IDS/IPS",
      ],
    },
    {
      icon: <Terminal size={20} />,
      title: "DevOps & Automatización",
      skills: [
        "Ansible",
        "Jenkins",
        "GitLab CI",
        "Prometheus",
        "Grafana",
        "Log Management",
        "Infra as Code",
      ],
    },
  ];

  const timelineItems = [
    {
      date: "2023 - Presente",
      position: "DevOps Engineer & Backend Developer",
      org: "Tech Solutions Inc",
      modality: "Remoto",
      description:
        "Desarrollo de APIs escalables con Rust/Go y gestión de infraestructura AWS. Implementación de pipelines CI/CD y monitorización con Prometheus/Grafana.",
    },
    {
      date: "2021 - 2023",
      position: "Full Stack Developer & SysAdmin",
      org: "Digital Agency",
      modality: "Híbrido",
      description:
        "Desarrollo full-stack con React/Node.js y administración de servidores Linux. Migración a cloud (AWS) y automatización de despliegues.",
    },
    {
      date: "2019 - 2021",
      position: "Técnico en Sistemas y Redes",
      org: "IT Services Company",
      modality: "Presencial",
      description:
        "Administración de redes corporativas, virtualización con VMware, soporte técnico avanzado y hardening de servidores.",
    },
    {
      date: "2017 - 2019",
      position: "Ciclo Superior ASIR",
      org: "Formación Profesional",
      modality: "Presencial",
      description:
        "Formación especializada en administración de sistemas, redes, seguridad informática y servicios de red.",
    },
  ];

  return (
    <motion.div
      className={styles.experience}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1># Experiencia & Competencias</h1>

      <h2>
        <span className="hashtag">##</span> Áreas de Especialización
      </h2>
      <div className={styles.competenciesGrid}>
        {competencies.map((category, index) => (
          <div key={index} className={styles.competencyCategory}>
            <div className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>{category.icon}</span>
              {category.title}
            </div>
            <div className={styles.competencyList}>
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`${styles.competencyTag} ${skill === "Rust" || skill === "Linux Server" || skill === "AWS" ? styles.highlight : ""}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2>Trayectoria Profesional</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>

        <div className={styles.timelineItemContainer}>
          {timelineItems.map((item, index) => (
            <article key={index} className={styles.timelineArticle}>
              <div className={styles.timelineMarker}>●</div>
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
