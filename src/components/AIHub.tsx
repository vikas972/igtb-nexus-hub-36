import { Search, Filter, Bot, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const agents = [
  {
    name: "Payment Processor",
    objective: "Automate payment processing workflows",
    maturity: "L4",
    product: "CBX Payments",
    status: "Production",
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
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);

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
                <div className="flex justify-between items-start">
                  <CardTitle>{agent.name}</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-igtb-primary hover:text-igtb-primary/80"
                    onClick={() => setSelectedAgent(agent)}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
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

        <Dialog open={!!selectedAgent} onOpenChange={() => setSelectedAgent(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-igtb-primary">
                {selectedAgent?.name}
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Agent Profile</h3>
                <p className="text-gray-600">{selectedAgent?.details.profile}</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Task Objectives</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">{selectedAgent?.details.taskObjectives.main}</p>
                  <p className="text-gray-600">{selectedAgent?.details.taskObjectives.implementation}</p>
                  <p className="text-gray-600">{selectedAgent?.details.taskObjectives.details}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">System Integration</h3>
                <p className="text-gray-600">{selectedAgent?.details.systemIntegration}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Process Flow</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Input Phase</h4>
                  <p className="text-gray-600">{selectedAgent?.details.processFlow.input}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Processing Phase</h4>
                  <p className="text-gray-600">{selectedAgent?.details.processFlow.processing}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Output Phase</h4>
                  <p className="text-gray-600">{selectedAgent?.details.processFlow.output}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Operating Philosophy</h3>
                <p className="text-gray-600">{selectedAgent?.details.operatingPhilosophy}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Performance Metrics</h3>
                <p className="text-gray-600">{selectedAgent?.details.performanceMetrics}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Operating Parameters</h3>
                <p className="text-gray-600">{selectedAgent?.details.operatingParameters}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};