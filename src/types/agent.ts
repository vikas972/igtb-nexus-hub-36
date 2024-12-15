export type AgentType = "conversation" | "automation";

export interface AgentDetails {
  profile: string;
  taskObjectives: {
    main: string;
    implementation: string;
    details: string;
  };
  systemIntegration: string;
  processFlow: {
    input: string;
    processing: string;
    output: string;
  };
  operatingPhilosophy: string;
  performanceMetrics: string;
  operatingParameters: string;
}

export interface Agent {
  name: string;
  objective: string;
  maturity: string;
  product: string;
  status: string;
  type: AgentType;
  inputParameters?: string[];
  outputParameters?: string[];
  details: AgentDetails;
}