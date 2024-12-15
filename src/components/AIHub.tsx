import { Search, Filter, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AgentCard } from "./AgentCard";
import { AgentDetailsDialog } from "./AgentDetailsDialog";
import { type Agent } from "@/types/agent";

const agents: Agent[] = [
  {
    name: "Payment Processor",
    objective: "Automate payment processing workflows",
    maturity: "L4",
    product: "CBX Payments",
    status: "Production",
    type: "automation",
    inputParameters: ["Payment Details", "Customer Information", "Transaction Type"],
    outputParameters: ["Transaction Status", "Payment Confirmation", "Error Details"],
    details: {
      profile: "AI Agent specialized in payment processing domain tasks",
      taskObjectives: {
        main: "Tracking progress and identifying issues",
        implementation: "Execute payment-specific tasks efficiently",
        details: "Monitors payment processing in real-time and predicts potential bottlenecks"
      },
      systemIntegration: "Collaborates with other agents in the payment ecosystem",
      processFlow: {
        input: "Requirements Analysis",
        processing: "Task Execution",
        output: "Results Validation"
      },
      operatingPhilosophy: "Task-focused with emphasis on accuracy",
      performanceMetrics: "Task completion rate and accuracy",
      operatingParameters: "Task complexity and system resources"
    }
  },
  {
    name: "Risk Analyzer",
    objective: "Assess transaction risk levels",
    maturity: "L3",
    product: "Purple Fabric",
    status: "Beta",
    type: "automation",
    inputParameters: ["Transaction Data", "Risk Factors", "Historical Data"],
    outputParameters: ["Risk Score", "Risk Analysis Report", "Recommendations"],
    details: {
      profile: "AI Agent specialized in risk analysis domain",
      taskObjectives: {
        main: "Tracking risk levels and identifying threats",
        implementation: "Execute risk assessment tasks efficiently",
        details: "Monitors risk factors in real-time and predicts potential issues"
      },
      systemIntegration: "Collaborates with security and compliance agents",
      processFlow: {
        input: "Risk Data Analysis",
        processing: "Risk Assessment",
        output: "Risk Report Generation"
      },
      operatingPhilosophy: "Accuracy-focused with emphasis on threat detection",
      performanceMetrics: "Detection accuracy and response time",
      operatingParameters: "Risk complexity and system thresholds"
    }
  },
  {
    name: "DevOps Assistant",
    objective: "Streamline deployment processes",
    maturity: "L2",
    product: "VAM",
    status: "Development",
    type: "conversation",
    inputParameters: ["Deployment Configuration", "Environment Details", "Release Notes"],
    outputParameters: ["Deployment Status", "Environment Health", "Performance Metrics"],
    details: {
      profile: "AI Agent specialized in DevOps automation",
      taskObjectives: {
        main: "Tracking deployment progress and identifying bottlenecks",
        implementation: "Execute deployment tasks efficiently",
        details: "Monitors deployment pipeline and predicts potential issues"
      },
      systemIntegration: "Collaborates with CI/CD tools and other automation agents",
      processFlow: {
        input: "Deployment Requirements",
        processing: "Automated Deployment",
        output: "Deployment Validation"
      },
      operatingPhilosophy: "Automation-focused with emphasis on reliability",
      performanceMetrics: "Deployment success rate and time",
      operatingParameters: "Deployment complexity and system resources"
    }
  },
];

export const AIHub = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

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
            <AgentCard
              key={agent.name}
              agent={agent}
              onInfoClick={setSelectedAgent}
            />
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

        <AgentDetailsDialog
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      </div>
    </section>
  );
};