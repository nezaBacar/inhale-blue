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
import { POOL_TRAINING_MONTHLY_PASS_PRICE, POOL_TRAINING_SINGLE_SESSION_PRICE, POOL_TRAINING_TEN_SESSION_PACKAGE_PRICE } from "@/app/consts";

const PoolTraining = () => {
  const { t } = useTranslation();

  const schedule = [
    { day: t('poolTraining.monday'), time: "20:00 - 21:30" },
    { day: t('poolTraining.tuesday'), time: "20:00 - 21:30" },
    { day: t('poolTraining.wednesday'), time: "20:00 - 21:30" },
    { day: t('poolTraining.thursday'), time: "20:00 - 21:30" },
  ];

  const pricing = [
    { option: t('poolTraining.singleSession'), price: POOL_TRAINING_SINGLE_SESSION_PRICE},
    { option: t('poolTraining.monthlyPass'), price: POOL_TRAINING_MONTHLY_PASS_PRICE },
    { option: t('poolTraining.tenSessionPackage'), price: POOL_TRAINING_TEN_SESSION_PACKAGE_PRICE },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <SimpleNavigation/>

      {/* Hero Section */}
      <HeroSection
        imageSrc="/assets/pool-training-hero.jpg"
        imageAlt="Freediver training dynamic apnea in swimming pool"
        locationKey="poolTraining.location"
        titleKey="poolTraining.title"
        subtitleKey="poolTraining.subtitle"
        subtitle2Key="poolTraining.subtitle2"
      />

      {/* Introduction */}
      <CourseIntroduction
        title1Key="poolTraining.introTitle1"
        title2Key="poolTraining.introTitle2"
        textKey="poolTraining.introText"
      />

      {/* Features Grid */}
     <CourseFeaturesGrid
        labelKey="poolTraining.featuresLabel"
        titleKey="poolTraining.featuresTitle"
        itemTitlePrefix="poolTraining.featuresTitle"
        itemDescPrefix="poolTraining.featuresDescription"
      />

      {/* Schedule Section */}
      <section className="py-24 bg-gradient-ocean">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-ocean-surface text-sm tracking-[0.3em] uppercase font-body">
                  {t('poolTraining.scheduleLabel')}
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-light mt-4">
                  {t('poolTraining.scheduleTitle')}
                </h2>
                <p className="text-primary-foreground/70 font-body mt-4">
                  {t('poolTraining.scheduleLocation')}
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {schedule.map((item, index) => (
                <FadeInSection key={item.day} delay={index * 0.1}>
                  <div className="flex items-center justify-between p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-sm border border-primary-foreground/20">
                    <span className="text-primary-foreground font-display text-lg">
                      {item.day}
                    </span>
                    <span className="text-ocean-surface font-body">
                      {item.time}
                    </span>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.4}>
              <p className="text-center text-primary-foreground/60 font-body text-sm mt-8">
                {t('poolTraining.scheduleNote')}
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pricing & Includes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Pricing */}
            <FadeInSection>
              <div>
                <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                  {t('poolTraining.pricingLabel')}
                </span>
                <h2 className="font-display text-3xl text-foreground font-light mt-4 mb-8">
                  {t('poolTraining.pricingTitle')}
                </h2>
                <div className="space-y-4">
                  {pricing.map((item) => (
                    <div
                      key={item.option}
                      className="flex items-center justify-between p-4 border border-border rounded-sm hover:border-primary/30 transition-colors"
                    >
                      <span className="font-body text-foreground">
                        {item.option}
                      </span>
                      <span className="font-display text-xl text-primary">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground font-body text-sm">
                  {t('poolTraining.pricingNote')}
                </p>
              </div>
            </FadeInSection>

            {/* What's Included */}
            <FadeInSection delay={0.1}>
              <CourseIncludesList
                labelKey="poolTraining.includesLabel"
                titleKey="poolTraining.includesTitle"
                itemsPrefix="poolTraining.includes"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <CourseBookingForm
        labelKey="poolTraining.formLabel"
        titleKey="poolTraining.formTitle"
        coursePage="Pool Training"
      />  

      {/* Footer */}
      <SimpleFooter/>
    </main>
  );
};

export default PoolTraining;
