import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Softy Solutions took our rough concept and turned it into a polished SaaS product in just 8 weeks. The speed and quality blew us away!",
    author: "Alex Carter",
    role: "Founder of Taskify",
    rating: 5,
  },
  {
    quote:
      "Their AI-powered workflow is a game-changer. We launched ahead of schedule and under budget.",
    author: "Lena Torres",
    role: "CEO of BrightFinance",
    rating: 5,
  },
  {
    quote:
      "Softy Solutions turned our scattered idea into a polished MVP in under two months. The AI-driven workflow saved us months of trial and error.",
    author: "Sofia Patel",
    role: "Co-Founder at EcoLink",
    rating: 5,
  },
  {
    quote:
      "They didn't just build our product — they challenged our thinking and made it better. Their AI prototypes nailed 90% of our vision on the first try.",
    author: "Daniel Wright",
    role: "CEO of FlowPilot",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Trusted by Innovators Worldwide
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/20 card-hover"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                <span className="text-sm font-semibold text-foreground mr-2">
                  {testimonial.rating}/5
                </span>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium text-foreground">— {testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
