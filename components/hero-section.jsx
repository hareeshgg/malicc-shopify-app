import { Button } from "./ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-6 pt-32 pb-24 bg-black">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20">
          <span className="text-sm font-medium text-white">
            Neuromarketing-Powered
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-7xl font-extrabold mb-8 text-white leading-[1.1] tracking-tight">
          Ecommerce that
          <span className="block text-white mt-2">
            converts, not just exists.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          malicc embeds consumer psychology directly into your store, checkout,
          and messaging — ethically, transparently, and at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" href="#waitlist">
            Join the Waitlist
          </Button>
          <Button variant="secondary" size="lg" href="#how-it-works">
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
}
