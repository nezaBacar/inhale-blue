'use client'

import { useTranslation } from "react-i18next";
import { FadeInSection } from "@/app/components/FadeInSection";

interface CourseFeaturesGridProps {
  labelKey: string;
  titleKey: string;
  itemTitlePrefix: string;
  itemDescPrefix: string;
}

const CourseFeaturesGrid = ({
  labelKey,
  titleKey,
  itemTitlePrefix,
  itemDescPrefix,
}: CourseFeaturesGridProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              {t(labelKey)}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light mt-4">
              {t(titleKey)}
            </h2>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="p-8 bg-card rounded-sm border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <h3 className="font-display text-xl text-foreground mb-4">
                  {t(`${itemTitlePrefix}${index}`)}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm font-body">
                  {t(`${itemDescPrefix}${index}`)}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeaturesGrid;