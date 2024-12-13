import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Accelerating Innovation through{" "}
            <span className="text-igtb-primary">AI-Powered Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Welcome to iGTB's AI ecosystem, where cutting-edge technology meets
            banking innovation. Discover our comprehensive suite of AI-powered
            expert agents and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-igtb-primary hover:bg-igtb-secondary text-white"
              onClick={() => scrollToSection("ai-hub")}
            >
              Explore Centralized AI Hub
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-igtb-primary text-igtb-primary hover:bg-igtb-primary hover:text-white"
              onClick={() => scrollToSection("innovations")}
            >
              Discover iGTB Product Innovations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};