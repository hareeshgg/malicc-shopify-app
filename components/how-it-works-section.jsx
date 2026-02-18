import { Card, CardContent } from "./ui/Card";

const steps = [
  {
    number: "01",
    title: "Create your store",
    description:
      "Create your store with conversion-optimized layouts backed by behavioral science.",
  },
  {
    number: "02",
    title: "Manage everything",
    description:
      "Manage products, orders, and customers from a unified admin dashboard.",
  },
  {
    number: "03",
    title: "Launch and scale",
    description:
      "Launch faster, convert better, and scale without rebuilding your stack.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How malicc works
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-white/20 hidden md:block"></div>
              <Card className="bg-neutral-900 border-neutral-800 h-full rounded-xl">
                <CardContent className="space-y-4 pt-6">
                  <div className="text-6xl font-black text-white">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white text-xl">{step.title}</h3>
                  <p className="text-neutral-300">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
          <h3 className="font-bold text-white mb-3 text-2xl">
            Pay once, grow forever
          </h3>
          <p className="text-neutral-300 mb-2">
            One-time setup, then pay-as-you-go
          </p>
          <p className="text-neutral-400">
            No monthly subscriptions. Pay only for setup, then usage-based costs
            that scale with your success.
          </p>
        </div>
      </div>
    </section>
  );
}
