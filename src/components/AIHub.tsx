import { Search, Filter, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const agents = [
  {
    name: "Payment Processor",
    objective: "Automate payment processing workflows",
    maturity: "L4",
    product: "CBX Payments",
    status: "Production",
  },
  {
    name: "Risk Analyzer",
    objective: "Assess transaction risk levels",
    maturity: "L3",
    product: "Purple Fabric",
    status: "Beta",
  },
  {
    name: "DevOps Assistant",
    objective: "Streamline deployment processes",
    maturity: "L2",
    product: "VAM",
    status: "Development",
  },
];

export const AIHub = () => {
  return (
    <section id="ai-hub" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Centralized AI Hub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your central destination for AI-powered Expert Agents and initiatives
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search expert agents..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {agents.map((agent) => (
            <Card key={agent.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{agent.name}</CardTitle>
                <CardDescription>{agent.objective}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-igtb-primary/10 text-igtb-primary rounded-full text-sm">
                    {agent.maturity}
                  </span>
                  <span className="px-2 py-1 bg-igtb-secondary/10 text-igtb-secondary rounded-full text-sm">
                    {agent.product}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {agent.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-igtb-primary border-igtb-primary hover:bg-igtb-primary hover:text-white"
          >
            <Bot className="h-5 w-5" />
            Ask Me About Expert Agents
          </Button>
        </div>
      </div>
    </section>
  );
};