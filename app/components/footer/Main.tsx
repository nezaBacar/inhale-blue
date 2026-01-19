'use client'

import { useTranslation } from "react-i18next";
import Socials from "./Socials";
import Link from "next/link";

const MainFooter = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-16 bg-ocean-deep">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-display text-2xl text-primary-foreground font-light tracking-wide">
              {t('title')}
            </span>
            <p className="text-primary-foreground/60 text-sm mt-2 font-body">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="#about"
              className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors font-body"
            >
              {t('footer.about')}
            </Link>
            <Link
              href="#courses"
              className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors font-body"
            >
              {t('footer.courses')}
            </Link>
            <Link
              href="/team"
              className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors font-body"
            >
              {t('footer.team')}
            </Link>
            <Link
              href="mailto:info@inhaleblue.com"
              className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors font-body"
            >
              {t('footer.contact')}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center flex flex-col items-center gap-4">
          <Socials />
          <p className="text-primary-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} {t('title')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
