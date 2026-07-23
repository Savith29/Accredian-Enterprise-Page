import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Pillars from "@/components/Pillars";
import ProgramTracks from "@/components/ProgramTracks";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Pillars />
        <ProgramTracks />
        <HowItWorks />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
