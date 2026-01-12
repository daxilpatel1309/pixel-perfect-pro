import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Apple Valley",
    address: "14960 Florence Trail\nApple Valley, MN 55124",
    hours: "Monday – Sunday,\n9am – 7pm EST",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "White Bear Lake",
    address: "2401 East Buffalo St.\nWhite Bear Lake, MN 55110",
    hours: "Monday – Sunday,\n9am – 7pm EST",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "San Francisco",
    address: "123 Innovation Street\nSan Francisco, CA 94107",
    hours: "Monday – Friday,\n9am – 6pm PST",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=80",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Wave Background */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Gradient wave background */}
        <div className="absolute inset-0">
          <div className="gradient-mesh h-full">
            <div className="gradient-blob gradient-blob-1" />
            <div className="gradient-blob gradient-blob-2" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Contact Us Easily Online
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Start your path to digital excellence with our thoroughly selected specialists.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Link to="/about">
                  <Button variant="hero" size="lg">
                    <ArrowRight className="w-4 h-4" />
                    More About Us
                  </Button>
                </Link>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Give Us a Call:</p>
                  <a href="tel:+08002336781" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                    + 0800 2336 7811
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information with Map */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                We're here to walk alongside you on your wellness journey. Whether you have questions about our services, want to book an appointment, or simply need guidance, our team is ready to help.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address:</h3>
                    <p className="text-muted-foreground text-sm">
                      14960 Florence Trail<br />
                      Apple Valley, MN 55124
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Open:</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday – Sunday,<br />
                      9am – 7pm EST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
                alt="Map location"
                className="w-full h-[350px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">All Locations</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl overflow-hidden shadow-card border border-border group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 font-serif text-2xl text-white">
                    {location.name}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Address:</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {location.address}
                    </p>
                  </div>
                  <Link 
                    to="#" 
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-1">Open:</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {location.hours}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Ask a Question
              </h2>
              <p className="text-muted-foreground text-lg">
                If you have any questions, you can contact us. Please, fill out the form below.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-14 px-5 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-14 px-5 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full h-14 px-5 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full h-14 px-5 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full h-14 px-5 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
