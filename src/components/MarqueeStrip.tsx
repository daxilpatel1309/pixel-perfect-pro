import { motion } from "framer-motion";

const marqueeText = [
  "From Idea to MVP in 8 Weeks",
  "Build Smarter. Launch Faster.",
  "Where AI Meets Human Expertise",
  "AI-Accelerated Product Development",
];

export const MarqueeStrip = () => {
  return (
    <section className="py-8 bg-foreground text-primary-foreground overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center whitespace-nowrap"
        >
          {[...marqueeText, ...marqueeText, ...marqueeText, ...marqueeText].map((text, index) => (
            <span
              key={index}
              className="text-xl md:text-2xl font-serif flex items-center gap-8"
            >
              {text}
              <span className="w-2 h-2 rounded-full bg-primary" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
