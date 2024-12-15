import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { type Agent } from "@/types/agent";

interface AgentDetailsDialogProps {
  agent: Agent | null;
  onClose: () => void;
}

export const AgentDetailsDialog = ({ agent, onClose }: AgentDetailsDialogProps) => {
  if (!agent) return null;

  return (
    <Dialog open={!!agent} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gradient-to-br from-white to-gray-50">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-igtb-primary">
              {agent.name}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 hover:bg-igtb-primary/10 transition-colors"
            >
              <X className="h-4 w-4 text-igtb-primary" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-igtb-primary">Agent Properties</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Type:</span> {agent.type}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Maturity Level:</span> {agent.maturity}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Product/LOB:</span> {agent.product}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Status:</span> {agent.status}
              </p>
            </div>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-igtb-primary">Parameters</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-gray-800">Input Parameters:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {agent.inputParameters?.map((param, index) => (
                    <li key={index}>{param}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Output Parameters:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {agent.outputParameters?.map((param, index) => (
                    <li key={index}>{param}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-igtb-primary">Agent Profile</h3>
            <p className="text-gray-700">{agent.details.profile}</p>
          </div>
          
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-igtb-primary">Task Objectives</h3>
            <div className="space-y-2">
              <p className="text-gray-700">{agent.details.taskObjectives.main}</p>
              <p className="text-gray-700">{agent.details.taskObjectives.implementation}</p>
              <p className="text-gray-700">{agent.details.taskObjectives.details}</p>
            </div>
          </div>
          
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-igtb-primary">System Integration</h3>
            <p className="text-gray-700">{agent.details.systemIntegration}</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-igtb-primary mb-4">Process Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2">Input Phase</h4>
              <p className="text-gray-700">{agent.details.processFlow.input}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2">Processing Phase</h4>
              <p className="text-gray-700">{agent.details.processFlow.processing}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2">Output Phase</h4>
              <p className="text-gray-700">{agent.details.processFlow.output}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-igtb-primary">Operating Philosophy</h3>
            <p className="text-gray-700">{agent.details.operatingPhilosophy}</p>
          </div>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-igtb-primary">Performance Metrics</h3>
            <p className="text-gray-700">{agent.details.performanceMetrics}</p>
          </div>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-igtb-primary">Operating Parameters</h3>
            <p className="text-gray-700">{agent.details.operatingParameters}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};