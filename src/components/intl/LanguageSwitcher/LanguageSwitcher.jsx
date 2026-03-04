"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./LanguageSwitcher.module.css";

import Spain from "@/components/icons/svg/Spain";
import English from "@/components/icons/svg/English";

const LANGUAGES = [
  { code: "es", short: "ES", name: "Espanol", Icon: Spain },
  { code: "en", short: "EN", name: "English", Icon: English },
];

export default function LanguageSwitcher() {
  const t = useTranslations("Common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  const currentLang =
    LANGUAGES.find((lang) => lang.code === locale) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <motion.button
        type="button"
        className={styles.trigger}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={t("languageSwitcher")}
      >
        <currentLang.Icon size={22} />
        <div className={styles.text}>
          <span className={styles.name}>{currentLang.name}</span>
          <span className={styles.short}>{currentLang.short}</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.menu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {LANGUAGES.map(({ code, short, name, Icon }) => (
              <li key={code}>
                <button
                  type="button"
                  className={`${styles.option} ${
                    locale === code ? styles.active : ""
                  }`}
                  onClick={() => handleChange(code)}
                  aria-current={locale === code ? "true" : "false"}
                >
                  <Icon size={22} />
                  <div className={styles.text}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.short}>{short}</span>
                  </div>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
