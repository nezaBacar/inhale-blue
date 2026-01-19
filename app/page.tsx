import MainFooter from "./components/footer/Main";
import AboutSection from "./components/landing/AboutSection";
import CoursesSection from "./components/landing/CoursesSection";
import HeroSection from "./components/landing/HeroSection";
import NewsletterSection from "./components/landing/NewsletterSection";
import PrinciplesSection from "./components/landing/PrinciplesSection";
import QuoteSection from "./components/landing/QuoteSection";
import Navigation from "./components/navigation/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PrinciplesSection />
      <CoursesSection showTitle/>
      <QuoteSection />
      <NewsletterSection />
      <MainFooter />
    </main>
  );
};

export default Index;
