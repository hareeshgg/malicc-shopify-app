import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import React, { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");

  return (
    <section
      id="waitlist"
      className="py-32 px-4 bg-black relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Stop guessing what converts.
        </h2>
        <p className="text-xl text-neutral-300 mb-12">
          Build stores that understand human decision-making.
        </p>

        <Card className="bg-neutral-900 border-neutral-800 rounded-xl">
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="text-white mb-2 text-xl font-semibold">
                Join the early access list
              </h3>
              <p className="text-neutral-400">
                Built for founders who care about conversion, not cosmetics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto w-full">
              <div className="flex-1">
                <Input
                  className="bg-neutral-950 border-neutral-800 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </div>
              <Button size="lg" className="min-w-[140px]">
                Join the waitlist
              </Button>
            </div>

            <p className="text-neutral-500 text-sm">
              No spam. No selling. Just early access.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
