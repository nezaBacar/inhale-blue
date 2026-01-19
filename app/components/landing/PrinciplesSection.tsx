'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PrinciplesSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="principles" className="py-32 bg-gradient-ocean">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm tracking-[0.3em] uppercase font-body"
          >
            {t('principles.label')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light mt-6"
          >
            {t('principles.title')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6">
                <span className="inline-block w-12 h-[1px] bg-ocean-surface/50 group-hover:w-20 transition-all duration-500" />
              </div>
              <h3 className="font-display text-2xl text-primary-foreground mb-4">
                {t(`principles.title${index}`)}
              </h3>
              <p className="text-primary-foreground/70 font-light leading-relaxed font-body text-sm">
                {t(`principles.description${index}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
