import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeeCalculator from "@/components/FeeCalculator";
import ValuePropositions from "@/components/ValuePropositions";
import Commitment from "@/components/Commitment";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import SocialProof from "@/components/SocialProof";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeeCalculator />
        <ValuePropositions />
        <Commitment />
        <ServicesGrid />
        <ProcessTimeline />
        <SocialProof />
        <Team />
        <FAQ />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
