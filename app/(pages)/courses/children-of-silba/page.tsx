'use client'

import { useTranslation } from "react-i18next";
import SimpleNavigation from "@/app/components/navigation/SimpleNavigation";
import { FadeInSection } from "@/app/components/FadeInSection";
import SimpleFooter from "@/app/components/footer/Simple";
import HeroSection from "@/app/components/courses/Hero";
import CourseIntroduction from "@/app/components/courses/Introduction";
import CourseFeaturesGrid from "@/app/components/courses/FeaturesGrid";
import CourseBookingForm from "@/app/components/courses/Form";
import CourseIncludesList from "@/app/components/courses/Includes";
import { SILBA_DATES, SILBA_FULL_COURSE_PRICE, SILBA_ONE_DAY_PRICE, SILBA_ONE_DIVE_PRICE } from "@/app/consts";

const ChildrenOfSilba = () => {
  const { t } = useTranslation();

  const pricing = [
    { sessions: t('childrenOfSilba.pricingOneDive'), price: SILBA_ONE_DIVE_PRICE },
    { sessions: t('childrenOfSilba.pricingOneDay'), price: SILBA_ONE_DAY_PRICE },
    { sessions: t('childrenOfSilba.pricingFullCourse'), price: SILBA_FULL_COURSE_PRICE },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <SimpleNavigation/>

      {/* Hero Section */}
      <HeroSection
        imageSrc="/assets/silba-kids-hero.jpg"
        imageAlt="Children learning freediving in crystal clear waters of Silba, Croatia"
        locationKey="childrenOfSilba.location"
        titleKey="childrenOfSilba.title"
        subtitleKey="childrenOfSilba.subtitle"
        subtitle2Key="childrenOfSilba.subtitle2"
      />

      {/* Introduction */}
      <CourseIntroduction
        title1Key="childrenOfSilba.introTitle1"
        title2Key="childrenOfSilba.introTitle2"
        textKey="childrenOfSilba.introText"
        videoSrc="https://www.youtube.com/embed/ExYsAEpZwh0?wmode=opaque&enablejsapi=1"
      />

      {/* Features Grid */}
      <CourseFeaturesGrid
        labelKey="childrenOfSilba.featuresLabel"
        titleKey="childrenOfSilba.featuresTitle"
        itemTitlePrefix="childrenOfSilba.featuresTitle"
        itemDescPrefix="childrenOfSilba.featuresDescription"
      />

      {/* Course Structure Section */}
      <section className="py-24 bg-gradient-ocean">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInSection>
              <span className="text-ocean-surface text-sm tracking-[0.3em] uppercase font-body">
                {t('childrenOfSilba.structureLabel')}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-light mt-4 mb-10">
                {t('childrenOfSilba.structureTitle')}
              </h2>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="text-primary-foreground/80 text-lg leading-relaxed font-light font-body space-y-4">
               {[1, 2, 3].map((num) => {
                  return (
                    <p key={num}>
                      <strong className="text-primary-foreground">{t(`childrenOfSilba.structure${num}`)}</strong>{t(`childrenOfSilba.structure${num}note`)}
                    </p>
                  );
                })}
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-primary-foreground/70 text-base mt-8 font-body">
                {t('childrenOfSilba.structureNote')}
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
            {/* Pricing Options */}
            <FadeInSection>
              <div>
                <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                  {t('childrenOfSilba.pricingLabel')}
                </span>
                <h2 className="font-display text-3xl text-foreground font-light mt-4 mb-8">
                  {t('childrenOfSilba.pricingTitle')}
                </h2>
                <div className="space-y-4">
                  {pricing.map((item) => (
                    <div
                      key={item.sessions}
                      className="flex items-center justify-between p-4 border border-border rounded-sm hover:border-primary/30 transition-colors"
                    >
                      <span className="font-body text-foreground">
                        {item.sessions}
                      </span>
                      <span className="font-display text-xl text-primary">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground font-body text-sm">
                  {t('childrenOfSilba.pricingNote')}
                </p>
              </div>
            </FadeInSection>

            {/* What's Included */}
            <FadeInSection delay={0.1}>
              <div className="flex flex-col gap-8 md:gap-4">
                <div>
                  <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                    {t('childrenOfSilba.datesLabel')}
                  </span>
                  <h2 className="font-display text-3xl text-foreground font-light mt-4 mb-8">
                    {t('childrenOfSilba.datesTitle')}
                  </h2>
                  <div
                    className="flex items-center gap-4 p-4 mb-4 border border-border bg-secondary rounded-sm hover:border-primary/30 transition-colors"
                  >
                    <span className="font-display text-lg text-foreground font-bold">
                      {SILBA_DATES}
                    </span>
                  </div>
                </div>
                
                <CourseIncludesList
                  labelKey="childrenOfSilba.includesLabel"
                  titleKey="childrenOfSilba.includesTitle"
                  itemsPrefix="childrenOfSilba.includes"
                  itemCount={4}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <CourseBookingForm
        labelKey="childrenOfSilba.formLabel"
        titleKey="childrenOfSilba.formTitle"
        coursePage="Children of Silba Course"
      />  

      {/* Footer */}
      <SimpleFooter/>
    </main>
  );
};

export default ChildrenOfSilba;
