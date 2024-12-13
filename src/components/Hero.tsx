import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Driving Innovation through{" "}
          <span className="text-igtb-primary">AI-Powered Solutions</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our comprehensive suite of AI-powered expert agents and
          innovative banking solutions.
        </p>
        <Button
          size="lg"
          className="bg-igtb-primary hover:bg-igtb-secondary text-white"
          onClick={() => document.getElementById("ai-hub")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Expert Agents
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};