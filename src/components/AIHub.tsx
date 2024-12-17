import { Search, Filter, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { AgentCard } from "./AgentCard";
import { AgentDetailsDialog } from "./AgentDetailsDialog";
import { type Agent } from "@/types/agent";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export const AIHub = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAgents = async () => {
    const { data, error } = await supabase
      .from('ea_info')
      .select('*');
    
    if (error) {
      throw error;
    }

    return data as Agent[];
  };

  const { data: agents = [], isLoading, error } = useQuery({
    queryKey: ['agents'],
    queryFn: fetchAgents,
  });

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.objective.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter
          </Button>
        </div>

        {isLoading && (
          <div className="text-center py-8">Loading agents...</div>
        )}

        {error && (
          <div className="text-center py-8 text-red-500">
            Error loading agents: {error.message}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredAgents.map((agent) => (
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