import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    name: "CBX Payments",
    description: "Next-generation payment processing platform",
    features: ["Real-time processing", "Multi-currency support", "Smart routing"],
  },
  {
    name: "Purple Fabric",
    description: "Comprehensive banking infrastructure solution",
    features: ["Microservices architecture", "API-first", "Cloud-native"],
  },
  {
    name: "VAM",
    description: "Virtual Account Management system",
    features: ["Automated reconciliation", "Real-time reporting", "Custom hierarchies"],
  },
];

export const Innovations = () => {
  return (
    <section id="innovations" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Product Innovations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our cutting-edge banking solutions and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-igtb-primary rounded-full" />
                      {feature}
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