import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { ProblemSection } from "./components/ProblemSection";
import { WhySpinloop } from "./components/WhySpinloop";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { HubConcept } from "./components/HubConcept";
import { Equipment } from "./components/Equipment";
import { Pricing } from "./components/Pricing";
import { BusinessMetrics } from "./components/BusinessMetrics";
import { RevenueEngine } from "./components/RevenueEngine";
import { GrowthRoadmap } from "./components/GrowthRoadmap";
import { GoToMarket } from "./components/GoToMarket";
import { Operations } from "./components/Operations";
import { Risks } from "./components/Risks";
import { InvestmentAsk } from "./components/InvestmentAsk";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StickyCta } from "./components/StickyCta";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ProblemSection />
        <WhySpinloop />
        <HowItWorks />
        <Services />
        <HubConcept />
        <Equipment />
        <Pricing />
        <BusinessMetrics />
        <RevenueEngine />
        <GrowthRoadmap />
        <GoToMarket />
        <Operations />
        <Risks />
        <InvestmentAsk />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
