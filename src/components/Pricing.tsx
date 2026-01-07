import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    label: "For early-stage products",
    name: "MVP Launch",
    price: "$3,500",
    period: "/project",
    features: [
      "AI-assisted design & development",
      "1-month launch timeline",
      "Email & chat support",
    ],
    featured: false,
  },
  {
    label: "For scaling startups",
    name: "Growth Build",
    price: "$7,500",
    period: "/project",
    features: [
      "Full-stack development",
      "AI-accelerated QA & integrations",
      "Weekly strategy calls",
    ],
    featured: true,
  },
  {
    label: "For complex or high-scale projects",
    name: "Custom Enterprise",
    price: "Tailored Quote",
    period: "",
    features: [
      "Dedicated AI + human team",
      "Advanced architecture planning",
      "SLA-backed performance",
    ],
    featured: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Plans Overview</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Startup-Friendly Pricing
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative p-8 rounded-3xl border ${
                plan.featured
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border"
              } card-hover`}
            >
              {/* Label */}
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {plan.label}
              </p>

              {/* Plan Name */}
              <h3
                className={`font-serif text-2xl mb-2 ${
                  plan.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`text-4xl font-bold ${
                    plan.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 ${
                        plan.featured ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-primary-foreground/90" : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? "hero-outline" : "hero"}
                className={`w-full ${plan.featured ? "bg-white text-foreground hover:bg-white/90" : ""}`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
