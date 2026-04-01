import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ScrollAnimation from "@/components/ScrollAnimation";
import HowItWorksMobile from "@/components/HowItWorksMobile";
import FeatureCards from "@/components/FeatureCards";
import FeatureZigzag from "@/components/FeatureZigzag";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SignupProvider } from "@/components/SignupModal";

export default function Home() {
  return (
    <SignupProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <SocialProof />
        <ScrollAnimation />
        <HowItWorksMobile />
        <FeatureCards />
        <FeatureZigzag />
        <Pricing />
        <FinalCTA />
        <FAQ />
        <Footer />
      </main>
    </SignupProvider>
  );
}
