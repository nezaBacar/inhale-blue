'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm tracking-[0.3em] uppercase font-body"
          >
            {t('about.label')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light mt-6 mb-10"
          >
            {t('about.title1')}{" "}
            <br />
            <span className="italic text-primary">{t('about.title2')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light font-body"
          >
            {t('about.paragraph1')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light mt-6 font-body"
          >
            {t('about.paragraph2')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
