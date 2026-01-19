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
import { BALI_PRICE } from "@/app/consts";

const Bali = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <SimpleNavigation/>

      {/* Hero Section */}
      <HeroSection
        imageSrc="/assets/bali.png"
        imageAlt="Children learning freediving in crystal clear waters of Silba, Croatia"
        locationKey="bali.location"
        titleKey="bali.title"
        subtitleKey="bali.subtitle"
        subtitle2Key="bali.subtitle2"
      />

      {/* Introduction */}
      <CourseIntroduction
        title1Key="bali.introTitle1"
        title2Key="bali.introTitle2"
        textKey="bali.introText"
      />

      {/* Features Grid */}
      <CourseFeaturesGrid
        labelKey="bali.featuresLabel"
        titleKey="bali.featuresTitle"
        itemTitlePrefix="bali.featuresTitle"
        itemDescPrefix="bali.featuresDescription"
      />

      {/* Course Structure Section */}
      <section className="py-24 bg-gradient-ocean">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInSection>
              <span className="text-ocean-surface text-sm tracking-[0.3em] uppercase font-body">
                {t('bali.structureLabel')}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-light mt-4 mb-10">
                {t('bali.structureTitle')}
              </h2>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="text-primary-foreground/80 text-lg leading-relaxed font-light font-body space-y-4">
               {[1, 2, 3].map((num) => {
                  return (
                    <p key={num}>
                      <strong className="text-primary-foreground">{t(`bali.structure${num}`)}</strong>{t(`bali.structure${num}note`)}
                    </p>
                  );
              })}
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-primary-foreground/70 text-base mt-8 font-body">
                {t('bali.structureNote')}
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Pricing Options */}
            <FadeInSection>
                <div>
                <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                    {t('bali.pricingLabel')}
                </span>
                <h2 className="font-display text-3xl text-foreground font-light mt-4 mb-8">
                    {t('bali.pricingTitle')}
                </h2>
                <div className="p-8 border border-border rounded-sm hover:border-primary/30 transition-colors">
                    <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-5xl text-primary">{BALI_PRICE}</span>
                    <span className="text-muted-foreground font-body">{t('bali.priceNote')}</span>
                    </div>
                    <p className="text-muted-foreground font-body text-sm">
                    {t('bali.priceDescription')}
                    </p>
                </div>
                <p className="mt-6 text-muted-foreground font-body text-sm">
                    {t('bali.pricingNote')}
                </p>
                </div>
            </FadeInSection>

            {/* What's Included */}
            <FadeInSection delay={0.1}>
              <CourseIncludesList
                labelKey="bali.includesLabel"
                titleKey="bali.includesTitle"
                itemsPrefix="bali.includes"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <CourseBookingForm
        labelKey="bali.formLabel"
        titleKey="bali.formTitle"
        onSubmit={(formData) => {
          // Handle form submission, e.g., send to API or show toast
          console.log("Form submitted:", formData);
        }}
      />  

      {/* Footer */}
      <SimpleFooter/>
    </main>
  );
};

export default Bali;
