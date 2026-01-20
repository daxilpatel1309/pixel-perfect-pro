import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const blogPosts = [
  {
    title: "The Future of AI in Business: Trends to Watch in 2026",
    category: "Technology",
    date: "Jan 5, 2026",
    excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    readTime: "5 min read"
  },
  {
    title: "Building Scalable Applications: Best Practices for Startups",
    category: "Development",
    date: "Jan 3, 2026",
    excerpt: "Learn the essential strategies for building applications that can grow with your business needs.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    readTime: "8 min read"
  },
  {
    title: "UX Design Principles That Drive Conversion",
    category: "Design",
    date: "Dec 28, 2025",
    excerpt: "Discover the key UX design principles that can significantly improve your website's conversion rates.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    readTime: "6 min read"
  },
  {
    title: "How to Choose the Right Tech Stack for Your Project",
    category: "Development",
    date: "Dec 22, 2025",
    excerpt: "A comprehensive guide to selecting the perfect technology stack for your next software project.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
    readTime: "7 min read"
  },
  {
    title: "The Rise of No-Code and Low-Code Platforms",
    category: "Technology",
    date: "Dec 18, 2025",
    excerpt: "Understanding how no-code and low-code platforms are democratizing software development.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    readTime: "4 min read"
  },
  {
    title: "Creating Effective Digital Marketing Strategies",
    category: "Marketing",
    date: "Dec 15, 2025",
    excerpt: "Learn how to create digital marketing strategies that deliver measurable results for your business.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    readTime: "6 min read"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog"
        description="Read the latest insights, tips, and industry news from JJR SOFTWARE. Articles on software development, technology trends, and best practices."
        keywords="software development blog, technology blog, IT insights, software development tips, Ahmedabad tech blog"
        canonical="/blog"
      />
      <Header />
      
      <PageHero title="Blog" breadcrumb="Blog" />

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-primary bg-white rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
