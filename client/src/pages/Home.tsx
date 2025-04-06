import { Fragment } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </Fragment>
  );
}
