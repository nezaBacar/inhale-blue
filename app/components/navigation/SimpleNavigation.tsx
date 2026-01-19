'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "../Logo";
import Link from "next/link";

const SimpleNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo/>
            <span
              className={`font-display text-2xl font-light tracking-wide transition-colors duration-300 flex gap-2 ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              {t('title')}
            </span>
          </Link>

          {/* Navigation */}
          <Link
            href="/"
            className={`text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors font-body ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {t('nav.backToHome')}
          </Link>
        </div>
      </motion.nav>
    </>
  );
};

export default SimpleNavigation;
