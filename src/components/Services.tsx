import { motion } from "framer-motion";
import {
  Cpu,
  Smartphone,
  Palette,
  Bot,
  Cloud,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cpu,
    title: "AI-Accelerated Product Development",
    description:
      "We combine advanced AI tools with expert engineering to take your concept from idea to MVP in record time — without sacrificing quality.",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Custom Software & App Development",
    description:
      "From mobile apps to web platforms, we build scalable, high-performance solutions tailored to your market and business needs.",
    featured: true,
  },
  {
    icon: Palette,
    title: "Prototyping & UX Design",
    description:
      "Rapidly test ideas with interactive AI-generated prototypes and data-backed design decisions that put users first.",
    featured: true,
  },
  {
    icon: Bot,
    title: "AI Integration & Automation",
    description:
      "Enhance your product with AI features — from predictive analytics to smart chatbots — to improve efficiency and user engagement.",
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description:
      "Deploy with confidence. We design secure, scalable, and cost-efficient cloud infrastructure, with automated testing and CI/CD pipelines.",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Startup Growth Consulting",
    description:
      "We're more than a dev shop — we help you refine your business model, optimize workflows, and prepare for funding rounds.",
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Our Services</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Smart Solutions for
            <br />
            Fast-Growing Startups
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Code, strategy, and AI in perfect sync.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 card-hover cursor-pointer ${
                service.featured ? "" : "bg-primary/5"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">Ready to Innovate?</p>
          <Button variant="hero" size="lg">
            <ArrowRight className="w-4 h-4" />
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
