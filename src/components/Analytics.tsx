import { BarChart, LineChart, PieChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Analytics = () => {
  return (
    <section id="analytics" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Insights & Analytics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track performance metrics and usage analytics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-igtb-primary" />
                Agent Usage
              </CardTitle>
              <CardDescription>Monthly active agents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center text-gray-400">
                Analytics Dashboard Preview
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-igtb-primary" />
                Performance Trends
              </CardTitle>
              <CardDescription>Response times and accuracy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center text-gray-400">
                Analytics Dashboard Preview
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-igtb-primary" />
                Distribution
              </CardTitle>
              <CardDescription>Usage by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center text-gray-400">
                Analytics Dashboard Preview
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};