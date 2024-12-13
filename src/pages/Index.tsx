import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AIHub } from "@/components/AIHub";
import { Innovations } from "@/components/Innovations";
import { Governance } from "@/components/Governance";
import { Analytics } from "@/components/Analytics";
import { Knowledge } from "@/components/Knowledge";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AIHub />
        <Innovations />
        <Governance />
        <Analytics />
        <Knowledge />
      </main>
      <Footer />
    </div>
  );
};

export default Index;