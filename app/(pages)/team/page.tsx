'use client'

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SimpleNavigation from "../../components/navigation/SimpleNavigation";
import { FadeInSection } from "../../components/FadeInSection";
import SimpleFooter from "../../components/footer/Simple";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  const { t } = useTranslation();

  const images = [ '/assets/team/tadej.webp', '/assets/team/dunia.webp', '/assets/team/nik.webp' ]
  
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <SimpleNavigation/>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-100 w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={'/assets/team-hero.png'}
            alt="Inhale Blue team diving together"
            className="w-full h-full object-cover"
            width='1920' height="1080"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ocean-deep/50 via-ocean-deep/30 to-ocean-deep/70" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-4 font-body"
          >
            {t('team.label')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-light leading-tight"
          >
            {t('team.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-primary-foreground/90 text-lg md:text-xl font-light max-w-2xl font-body"
          >
            {t('team.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            {[1, 2, 3].map((index) => {
              return (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-start`}>
                    {/* Image */}
                    <div className="w-full md:w-1/3 shrink-0">
                      <div className="aspect-square overflow-hidden rounded-sm">
                        <Image
                          src={images[index - 1]}
                          alt={t(`team.name${index}`)}
                          className="w-full h-full object-cover"
                          width='1920' height="1080"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span className="text-accent text-xs tracking-widest uppercase font-body">
                        {t(`team.role${index}`)}
                      </span>
                      <h2 className="font-display text-3xl md:text-4xl text-foreground font-light mt-2 mb-6">
                        {t(`team.name${index}`)}
                      </h2>

                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((bioIndex) => {
                          const bioKey = `team.bio${index}_${bioIndex}`;
                          const bioText = t(bioKey);
                          if (bioText && !bioText.includes(bioKey)) {
                            return (
                              <p
                                key={bioIndex}
                                className="text-muted-foreground font-light leading-relaxed font-body text-sm"
                              >
                                {bioText}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>

                      {t(`team.quote${index}`) && !t(`team.quote${index}`).includes(`team.quote${index}`) && (
                        <blockquote className="mt-6 pl-4 border-l-2 border-primary">
                          <p className="text-primary font-display text-lg italic">
                            &ldquo;{t(`team.quote${index}`)}&rdquo;
                          </p>
                        </blockquote>
                      )}
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-light mb-6">
                {t('team.ctaTitle')}
              </h2>
              <p className="text-muted-foreground font-body mb-8">
                {t('team.ctaText')}
              </p>
              <Link
                href="/courses"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium tracking-wide hover:bg-primary/90 transition-colors font-body"
              >
                {t('team.ctaButton')}
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <SimpleFooter/>
    </main>
  );
};

export default Team;
