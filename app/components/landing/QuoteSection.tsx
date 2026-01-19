'use client'

import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRef } from "react";

const QuoteSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={'/assets/quote-bg.jpg'}
          alt="Freediver descending into the deep blue"
          className="w-full h-full object-cover"
          width='1920' height="1080"
        />
        <div className="absolute inset-0 bg-ocean-deep/60" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-2xl md:text-4xl lg:text-5xl text-primary-foreground font-light leading-relaxed"
          >
            {t('quote.text1')}
            <br />
            <span className="italic uppercase">{t('quote.freediver')}</span>
            <br />
            {t('quote.text3')}{" "}
            <span className="italic uppercase">{t('quote.inside')}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-primary-foreground/70 text-sm font-body">
              <span className="font-display text-base text-accent uppercase">— {t('quote.author')}</span>
              <br />
              <span className="text-xs tracking-widest">{t('quote.authorTitle')}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
