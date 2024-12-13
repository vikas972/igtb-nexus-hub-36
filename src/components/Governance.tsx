import { Mail, Phone, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const committees = [
  {
    name: "EA Maturity Committee",
    description: "Guiding agents from Exploration (L1) to Final Use (L5)",
    contact: {
      email: "maturity@igtb.com",
      phone: "+1 (555) 123-4567",
    },
  },
  {
    name: "EA OPS Committee",
    description: "Providing operational support and maintenance",
    contact: {
      email: "ops@igtb.com",
      phone: "+1 (555) 987-6543",
    },
  },
];

export const Governance = () => {
  return (
    <section id="governance" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Governance Committees
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert committees ensuring quality and operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {committees.map((committee) => (
            <Card key={committee.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{committee.name}</CardTitle>
                <CardDescription>{committee.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-igtb-primary" />
                  <a
                    href={`mailto:${committee.contact.email}`}
                    className="text-igtb-primary hover:underline"
                  >
                    {committee.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-igtb-primary" />
                  <a
                    href={`tel:${committee.contact.phone}`}
                    className="text-igtb-primary hover:underline"
                  >
                    {committee.contact.phone}
                  </a>
                </div>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};