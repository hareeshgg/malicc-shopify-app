import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Button } from "./ui/Button";

const plans = [
  {
    name: "Maker",
    subtitle: "For artisan & micro-brands",
    price: "$588",
    priceLabel: "one-time setup",
    description: "One-time setup, then pay only for what you use",
    buttonText: "Start Building",
    popular: false,
    features: [
      "Store setup & configuration",
      "Basic neuromarketing templates",
      "Trust signals & social proof integration",
      "Essential conversion analytics",
      "Up to 50 product slots",
      "Email support",
      "Pay-as-you-go hosting",
      "Standard checkout psychology",
    ],
    usage: [
      "Hosting & bandwidth: $0.05 per 100 visitors",
      "Transaction processing: 2.9% + $0.30",
      "Additional products: $1 per product/month",
    ],
    roi: "Typical ROI: 3-6x within 6 months",
  },
  {
    name: "Growth",
    subtitle: "For scaling D2C brands",
    price: "$1,188",
    priceLabel: "one-time setup",
    description: "Advanced conversion tools for serious brands",
    buttonText: "Join Waitlist →",
    popular: true,
    features: [
      "Premium store setup",
      "All neuromarketing templates",
      "Advanced trust & social proof systems",
      "Real-time conversion dashboard",
      "Up to 250 product slots",
      "Priority support (12h response)",
      "A/B testing tools",
      "Multi-step checkout psychology",
      "Custom branding options",
      "Web3-ready infrastructure",
    ],
    usage: [
      "Hosting & bandwidth: $0.04 per 100 visitors",
      "Transaction processing: 2.7% + $0.30",
      "Additional products: $0.75 per product/month",
    ],
    roi: "Typical ROI: 3-6x within 6 months",
  },
  {
    name: "Scale",
    subtitle: "For established D2C brands",
    price: "$2,400",
    priceLabel: "one-time setup",
    description: "Enterprise-grade conversion optimization",
    buttonText: "Contact Sales",
    popular: false,
    features: [
      "Custom store strategy & setup",
      "Dedicated conversion engineer",
      "Custom neuromarketing implementation",
      "Advanced real-time analytics",
      "Unlimited product slots",
      "24/7 priority support",
      "Custom A/B testing suite",
      "White-label options",
      "Custom integrations & APIs",
      "Quarterly strategy reviews",
    ],
    usage: [
      "Hosting & bandwidth: $0.03 per 100 visitors",
      "Transaction processing: 2.5% + $0.30",
      "Custom feature development: Hourly rate",
    ],
    roi: "Typical ROI: 3-6x within 6 months",
  },
];

export default function PricingSection() {
  return (
    <section className="py-32 px-4 bg-black" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-neutral-400">
            One-time setup, then pay-as-you-go. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <Card
                className={
                  plan.popular
                    ? "ring-2 ring-white bg-neutral-900 border-white/50 h-full"
                    : "bg-neutral-900 border-neutral-800 h-full"
                }
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-neutral-400">{plan.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="py-4 border-b border-neutral-800">
                    <div className="text-4xl font-bold text-white">
                      {plan.price}
                    </div>
                    <p className="text-sm text-neutral-400">
                      {plan.priceLabel}
                    </p>
                  </div>

                  <p className="text-neutral-300">{plan.description}</p>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "secondary"}
                    size="lg"
                    onClick={() => {
                      if (plan.name === "Maker") {
                        // Handle start building
                      } else if (plan.name === "Growth") {
                        document
                          .getElementById("waitlist")
                          ?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        // Handle contact sales
                      }
                    }}
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="pt-4 border-t border-neutral-800">
                    <h4 className="font-semibold text-white mb-3 text-sm">
                      What's included
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-neutral-300"
                        >
                          <span className="mr-2 text-white">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-neutral-800">
                    <h4 className="font-semibold text-white mb-2 text-sm">
                      Pay-as-you-go costs
                    </h4>
                    <p className="mb-2 font-semibold text-neutral-400 text-xs">
                      Usage-based
                    </p>
                    <ul className="space-y-2">
                      {plan.usage.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-neutral-300"
                        >
                          <span className="mr-2 text-white">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm font-semibold text-white">
                      {plan.roi}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
