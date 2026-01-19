'use client'

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with overlay - acts as video placeholder */}
      <div className="absolute inset-0">
        <Image
          src={'/assets/hero-freediving.jpg'}
          alt="Freediver descending into the deep blue ocean"
          width='1920' height="1080"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ocean-deep/40 via-ocean-deep/20 to-ocean-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary-foreground/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-body"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-light leading-tight max-w-4xl"
        >
          {t('hero.title1')}{" "}
          <br />
          <span className="italic">{t('hero.title2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-primary-foreground/90 text-lg md:text-xl font-light max-w-xl font-body"
        >
          {t('hero.philosophy')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <Link
            href="#courses"
            className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <span className="text-xs tracking-widest uppercase font-body">{t('hero.explore')}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
