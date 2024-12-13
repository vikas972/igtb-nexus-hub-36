import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AIHub } from "@/components/AIHub";
import { Innovations } from "@/components/Innovations";
import { Analytics } from "@/components/Analytics";
import { Knowledge } from "@/components/Knowledge";
import { Governance } from "@/components/Governance";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Innovations />
        <AIHub />
        <Governance />
        <Analytics />
        <Knowledge />
      </main>
      <Footer />
    </div>
  );
};

export default Index;