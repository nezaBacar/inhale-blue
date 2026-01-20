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
import { DEPTH_WORKSHOP_PRICE, DEPTH_WORKSHOP_DATE } from "@/app/consts";

const DepthWorkshops = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <SimpleNavigation/>

      {/* Hero Section */}
      <HeroSection
        imageSrc="/assets/depth-workshop-hero.jpg"
        imageAlt="Freediver descending into the deep pool during depth workshop"
        locationKey="depthWorkshops.location"
        titleKey="depthWorkshops.title"
        subtitleKey="depthWorkshops.subtitle"
        subtitle2Key="depthWorkshops.subtitle2"
      />

      {/* Introduction */}
      <CourseIntroduction
        title1Key="depthWorkshops.introTitle1"
        title2Key="depthWorkshops.introTitle2"
        textKey="depthWorkshops.introText"
      />

      {/* Features Grid */}
      <CourseFeaturesGrid
        labelKey="depthWorkshops.featuresLabel"
        titleKey="depthWorkshops.featuresTitle"
        itemTitlePrefix="depthWorkshops.featuresTitle"
        itemDescPrefix="depthWorkshops.featuresDescription"
      />

      {/* Workshop Schedule */}
      <section className="py-24 bg-gradient-ocean">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-ocean-surface text-sm tracking-[0.3em] uppercase font-body">
                  {t('depthWorkshops.scheduleLabel')}
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-light mt-4">
                  {t('depthWorkshops.scheduleTitle')}
                </h2>
              </div>
            </FadeInSection>

            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <FadeInSection key={item} delay={item * 0.1}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-sm border border-primary-foreground/20">
                    <div className="md:w-48 flex-shrink-0">
                      <span className="text-ocean-surface font-display text-lg">
                        {t(`depthWorkshops.scheduleTime${item}`)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary-foreground font-light font-body">
                        {t(`depthWorkshops.scheduleActivity${item}`)}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
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
                  {t('depthWorkshops.pricingLabel')}
                </span>
                <h2 className="font-display text-3xl text-foreground font-light mt-4 mb-8">
                  {t('depthWorkshops.pricingTitle')}
                </h2>
                <div
                  className="flex items-center gap-4 p-4 mb-4 border border-border rounded-sm hover:border-primary/30 transition-colors"
                >
                  <span className="font-display text-lg text-foreground font-bold">
                    {DEPTH_WORKSHOP_DATE}
                  </span>
                </div>
                <div className="p-8 border border-border rounded-sm hover:border-primary/30 transition-colors">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-5xl text-primary">{DEPTH_WORKSHOP_PRICE}</span>
                    <span className="text-muted-foreground font-body">{t('depthWorkshops.priceNote')}</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    {t('depthWorkshops.priceDescription')}
                  </p>
                </div>
                <p className="mt-6 text-muted-foreground font-body text-sm">
                  {t('depthWorkshops.pricingNote')}
                </p>
              </div>
            </FadeInSection>

            {/* What's Included */}
            <FadeInSection delay={0.1}>
              <CourseIncludesList
                labelKey="depthWorkshops.includesLabel"
                titleKey="depthWorkshops.includesTitle"
                itemsPrefix="depthWorkshops.includes"
                itemCount={5}
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <CourseBookingForm
        labelKey="depthWorkshops.formLabel"
        titleKey="depthWorkshops.formTitle"
        coursePage="Depth Workshops"
      />  

      {/* Footer */}
      <SimpleFooter/>
    </main>
  );
};

export default DepthWorkshops;
