import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Jordan Lee",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Carlos Rivera",
    role: "Lead AI Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Emma Nguyen",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
  },
];

export const HomeTeam = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-xl lg:sticky lg:top-32"
          >
            <p className="section-label mb-4">Meet the Team</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              The Minds Behind
              <br />
              the Machines
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team blends creativity, technical skill, and strategic thinking with AI innovation — so your product gets the best of both worlds.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/team">
                <ArrowRight className="w-4 h-4" />
                Meet the Team
              </Link>
            </Button>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:w-1/2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-lg text-primary-foreground">{member.name}</h3>
                  <p className="text-primary-foreground/70 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
