import HeroSection from "@/app/components/courses/Hero";
import SimpleFooter from "@/app/components/footer/Simple";
import CoursesSection from "@/app/components/landing/CoursesSection";
import NewsletterSection from "@/app/components/landing/NewsletterSection";
import SimpleNavigation from "@/app/components/navigation/SimpleNavigation";


const Index = () => {
  return (
    <main className="min-h-screen">
      <SimpleNavigation/>

      {/* Hero Section */}
      <HeroSection
        imageSrc="/assets/hero-freediving.jpg"
        imageAlt="Freediver descending into the deep blue ocean"
        locationKey="coursesPage.location"
        titleKey="coursesPage.title"
        subtitleKey="coursesPage.subtitle"
      />

      <CoursesSection/>
      
      <NewsletterSection />
      {/* Footer */}
      <SimpleFooter/>
    </main>
  );
};

export default Index;
