'use client'

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../navigation/LanguageSwitcher";
import Socials from "./Socials";
import Link from "next/link";


const SimpleFooter = () => {
  const { t } = useTranslation();
  
  return (
      <footer className="py-12 bg-ocean-deep flex justify-center">
        <div className="container text-center flex flex-col items-center gap-4">
          <LanguageSwitcher variant="light" />
          <Link href="/" className="inline-block">
            <span className="font-display text-xl text-primary-foreground font-light">
              {t('title')}
            </span>
          </Link>
          <Socials />
          <p className="text-primary-foreground/40 text-xs font-body text-white">
            © {new Date().getFullYear()} {t('title')}. {t('footer.rights')}
          </p>
        </div>
      </footer>
  
  );
};

export default SimpleFooter;
