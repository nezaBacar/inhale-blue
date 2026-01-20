'use client'

import { useTranslation } from "react-i18next";
import SimpleNavigation from "@/app/components/navigation/SimpleNavigation";
import { FadeInSection } from "@/app/components/FadeInSection";
import SimpleFooter from "@/app/components/footer/Simple";
import HeroSection from "@/app/components/courses/Hero";
import CourseIntroduction from "@/app/components/courses/Introduction";
import CourseFeaturesGrid from "@/app/components/courses/FeaturesGrid";
import CourseBookingForm from "@/app/components/courses/Form";
import { PAG_DATES, PAG_PRICING } from "@/app/consts";

const BlueWeekPag = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <SimpleNavigation/>

      {/* Hero Section */}
      <HeroSection
        imageSrc="/assets/pag-hero.jpg"
        imageAlt="Freediving boat on crystal clear Adriatic sea near Pag, Croatia"
        locationKey="blueWeek.location"
        titleKey="blueWeek.title"
        subtitleKey="blueWeek.subtitle"
        subtitle2Key="blueWeek.subtitle2"
      />

      {/* Introduction */}
      <CourseIntroduction
        title1Key="blueWeek.introTitle1"
        title2Key="blueWeek.introTitle2"
        textKey="blueWeek.introText"
      />

      {/* Features Grid */}
      <CourseFeaturesGrid
        labelKey="blueWeek.featuresLabel"
        titleKey="blueWeek.featuresTitle"
        itemTitlePrefix="blueWeek.title"
        itemDescPrefix="blueWeek.description"
      />

      {/* The Camp Section */}
      <section className="py-24 bg-gradient-ocean">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInSection>
              <span className="text-ocean-surface text-sm tracking-[0.3em] uppercase font-body">
                {t('blueWeek.scheduleLabel')}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-light mt-4 mb-10">
                {t('blueWeek.scheduleTitle')}
              </h2>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <p className="text-primary-foreground/80 text-lg leading-relaxed font-light font-body">
                {t('blueWeek.scheduleText')}
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-primary-foreground/70 text-base mt-6 font-body">
                {t('blueWeek.scheduleText2')}
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Dates & Pricing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Dates */}
            <FadeInSection>
              <div>
                <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                  {t('blueWeek.datesLabel')}
                </span>
                <h2 className="font-display text-3xl text-foreground font-light mt-4 mb-8">
                  {t('blueWeek.datesTitle')}
                </h2>
                <div className="space-y-4">
                  {PAG_DATES.map((date) => (
                    <div
                      key={date}
                      className="flex items-center gap-4 p-4 border border-border rounded-sm hover:border-primary/30 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="font-bold font-display text-lg text-foreground">
                        {date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Pricing */}
            <FadeInSection delay={0.1}>
              <div>
                <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                  {t('blueWeek.pricingLabel')}
                </span>
                <h2 className="font-display text-3xl text-foreground font-light mt-4 mb-8">
                  {t('blueWeek.pricingTitle')}
                </h2>
                <div className="p-8 bg-secondary rounded-sm">
                  <div className="mb-6">
                    <span className="font-display text-4xl text-primary">
                      {PAG_PRICING}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground font-body text-sm"
                      >
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {t(`blueWeek.includes${index}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <CourseBookingForm
        labelKey="blueWeek.bookingLabel"
        titleKey="blueWeek.bookingTitle"
        coursePage="Blue Week Pag"
      />  

      {/* Footer */}
      <SimpleFooter/>
    </main>
  );
};

export default BlueWeekPag;
