import { BookOpen, FileText, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const resources = [
  {
    title: "FAQs",
    description: "Common questions and answers",
    icon: FileText,
    links: ["General FAQs", "Technical FAQs", "Support FAQs"],
  },
  {
    title: "Cookbooks",
    description: "Step-by-step guides and tutorials",
    icon: BookOpen,
    links: ["Getting Started", "Best Practices", "Advanced Topics"],
  },
  {
    title: "Learning Tracks",
    description: "Structured learning paths",
    icon: GraduationCap,
    links: ["Agent Creation", "Publishing Guide", "Adoption Strategy"],
  },
];

export const Knowledge = () => {
  return (
    <section id="knowledge" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Knowledge Base
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive resources and documentation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <resource.icon className="h-5 w-5 text-igtb-primary" />
                  {resource.title}
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-igtb-primary hover:underline flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 bg-igtb-primary rounded-full" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};