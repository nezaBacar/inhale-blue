'use client'

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

const LanguageSwitcher = ({ variant = "dark" }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const baseClasses = "text-xs font-medium tracking-wide transition-all duration-300 px-2 py-1 rounded-sm";
  
  const getButtonClasses = (isActive: boolean) => {
    if (variant === "light") {
      return `${baseClasses} ${
        isActive 
          ? "bg-primary-foreground/20 text-primary-foreground cursor-pointer" 
          : "text-primary-foreground/60 hover:text-primary-foreground cursor-pointer"
      }`;
    }
    return `${baseClasses} ${
      isActive 
        ? "bg-primary/10 text-primary cursor-pointer" 
        : "text-muted-foreground hover:text-foreground cursor-pointer"
    }`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-1 font-body"
    >
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={getButtonClasses(i18n.language === "en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={variant === "light" ? "text-primary-foreground/40" : "text-muted-foreground"}>|</span>
      <button
        onClick={() => i18n.changeLanguage("sl")}
        className={getButtonClasses(i18n.language === "sl")}
        aria-label="Preklopi na slovenščino"
      >
        SL
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;