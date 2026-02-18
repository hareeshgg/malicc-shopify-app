import { Card, CardContent } from "./ui/Card";

const features = [
  {
    title: "Neuromarketing by default",
    description:
      "Trust signals, social proof, and friction reduction are built into every store component.",
  },
  {
    title: "Web3-ready SaaS architecture",
    description:
      "Modern, scalable infrastructure designed for ownership, extensibility, and future digital assets.",
  },
  {
    title: "Conversion-first checkout",
    description:
      "Multi-step flows engineered to reduce hesitation and abandonment.",
  },
  {
    title: "No plugins. No chaos.",
    description:
      "Everything you need is native — no duct-taped third-party tools.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-32 px-4 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Built for conversion
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Everything you need, nothing you don't
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-neutral-900 border-neutral-800 rounded-xl"
            >
              <CardContent className="space-y-3 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-white text-lg">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-neutral-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
