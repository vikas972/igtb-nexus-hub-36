import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Agent } from "@/types/agent";

interface AgentCardProps {
  agent: Agent;
  onInfoClick: (agent: Agent) => void;
}

export const AgentCard = ({ agent, onInfoClick }: AgentCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{agent.name}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-igtb-primary hover:text-igtb-primary/80"
            onClick={() => onInfoClick(agent)}
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
  );
};