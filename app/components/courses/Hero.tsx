'use client'

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  locationKey: string;
  titleKey: string;
  subtitleKey: string;
  subtitle2Key?: string;
}

const HeroSection = ({
  imageSrc,
  imageAlt,
  locationKey,
  titleKey,
  subtitleKey,
  subtitle2Key,
}: HeroSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/50 via-ocean-deep/30 to-ocean-deep/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-4 font-body"
        >
          {t(locationKey)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-light leading-tight"
        >
          {t(titleKey)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-primary-foreground/90 text-lg md:text-xl font-light max-w-2xl font-body"
        >
          {t(subtitleKey)}
          {subtitle2Key && (
            <>
              <br />
              {t(subtitle2Key)}
            </>
          )}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;