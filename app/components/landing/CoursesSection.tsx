'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ID_TO_URL = {
  "2": "/courses/depth-workshops",
  "5": "/courses/bali",
  "1": "/courses/blue-week-pag",
  "3": "/courses/children-of-silba",
  "4": "/courses/pool-training",
};

const CardContent = ({ title, location, duration, description, time, buttonText }: {title: string, location: string, duration: string, time: string, description: string, buttonText: string} ) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-accent text-xs tracking-widest uppercase font-body">
          {location}
        </span>
        <span className="w-6 h-px bg-border" />
        <span className="text-muted-foreground text-xs font-body">
          {time} { duration ? `(${duration})` : null}
        </span>
      </div>

      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground font-light leading-relaxed font-body">
        {description}
      </p>

      <div className="mt-8">
        <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wide font-body group-hover:gap-4 transition-all">
          {buttonText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </>
  );
};

const CoursesSection = ({showTitle}: {showTitle?: boolean}) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="courses" className="py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        { showTitle ? <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm tracking-[0.3em] uppercase font-body"
          >
            {t('courses.label')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light mt-6"
          >
            {t('courses.title')}
          </motion.h2>
        </div> : null }

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {["2", "5", "1", "3", "4"].map((index, _id) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + _id * 0.15 }}
              >
                {ID_TO_URL[index as keyof typeof ID_TO_URL] ? (
                  <Link
                    href={ID_TO_URL[index as keyof typeof ID_TO_URL]}
                    className="group block relative p-10 border border-border rounded-sm hover:border-primary/30 transition-all duration-500 bg-card"
                  >
                    <CardContent 
                      title={t(`courses.title${index}`)}
                      location={t(`courses.location${index}`)}
                      duration={t(`courses.duration${index}`)}
                      time={t(`courses.time${index}`)}
                      description={t(`courses.description${index}`)}
                      buttonText={t('courses.learnMore')}
                    />
                  </Link>
                ) : (
                  <div className="group relative p-10 border border-border rounded-sm hover:border-primary/30 transition-all duration-500 bg-card cursor-default">
                    <CardContent 
                      title={t(`courses.title${index}`)}
                      location={t(`courses.location${index}`)}
                      duration={t(`courses.duration${index}`)}
                      time={t(`courses.time${index}`)}
                      description={t(`courses.description${index}`)}
                      buttonText={t('courses.learnMore')}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
