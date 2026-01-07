import { motion } from "framer-motion";
import { Zap, Code, Bug, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "AI-Generated Prototypes",
    description: "Get wireframes and mockups in hours, not weeks.",
  },
  {
    icon: Code,
    title: "Accelerated Development",
    description: "AI-assisted coding speeds up delivery.",
  },
  {
    icon: Bug,
    title: "Smart QA Testing",
    description: "AI-driven testing for fewer bugs and smoother launches.",
  },
  {
    icon: HeadphonesIcon,
    title: "Full Support",
    description: "A dedicated team to guide you every step of the way.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed">
            At Softy Solutions, we harness AI-assisted design, development, and testing to help
            startups move from idea to launch{" "}
            <span className="text-gradient">up to 3x faster</span> than traditional agencies.
          </p>
          <Button variant="outline" className="mt-8">
            Find Out More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/20 card-hover"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
