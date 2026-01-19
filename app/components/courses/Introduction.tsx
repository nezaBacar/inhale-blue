'use client'

import { useTranslation } from "react-i18next";
import { FadeInSection } from "@/app/components/FadeInSection";

interface CourseIntroductionProps {
  title1Key: string;
  title2Key: string;
  textKey: string;
}

const CourseIntroduction = ({
  title1Key,
  title2Key,
  textKey,
}: CourseIntroductionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-light mb-8">
              {t(title1Key)}
              <span className="italic text-primary"> {t(title2Key)}</span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed font-light font-body">
              {t(textKey)}
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default CourseIntroduction;