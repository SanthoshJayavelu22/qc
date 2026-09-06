import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeeCalculator from "@/components/FeeCalculator";
import ValuePropositions from "@/components/ValuePropositions";
import HomeBanners from "@/components/HomeBanners";
import ProcessTimeline from "@/components/ProcessTimeline";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import SpeakToTeam from "@/components/SpeakToTeam";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Header />
      <main>
        {/* 1) Hero Section */}
        <Hero />

        {/* 2) Instant Quote Generator (Moved up directly after Hero) */}
        <FeeCalculator />

        {/* 3) Trust Badges & Value Propositions */}
        <ValuePropositions />

        {/* 4) Endorsement & Referral Banners */}
        <HomeBanners />

        {/* 5) "What Happens Next" (The Process) */}
        <ProcessTimeline />

        {/* 6) Reviews Section (~10 Google Reviews) */}
        <SocialProof />

        {/* 7) FAQs Section */}
        <FAQ />

        {/* 8) Speak to Our Team Section */}
        <SpeakToTeam />
      </main>
      <Footer />
    </>
  );
}
