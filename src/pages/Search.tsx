import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchContent, highlightText, SearchableItem } from "@/data/searchableContent";
import { Search as SearchIcon, ArrowRight } from "lucide-react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("s") || "";
  const [inputValue, setInputValue] = useState(query);
  const [results, setResults] = useState<SearchableItem[]>([]);

  useEffect(() => {
    setInputValue(query);
    if (query) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchParams({ s: inputValue.trim() });
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-primary/5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {query ? (
              <>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  Search Results for:
                </h1>
                <p className="text-2xl md:text-3xl text-primary font-medium">
                  "{query}"
                </p>
              </>
            ) : (
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Search Our Site
              </h1>
            )}

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="mt-10 flex gap-3 max-w-xl mx-auto"
            >
              <div className="relative flex-1">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Search for pages, services, blog posts..."
                  className="pl-12 h-14 text-base rounded-full border-border/50 focus:border-primary"
                  aria-label="Search input"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="rounded-full h-14 px-8"
              >
                Search
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container">
          {query && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <p className="text-muted-foreground">
                {results.length > 0
                  ? `Found ${results.length} result${results.length !== 1 ? "s" : ""}`
                  : ""}
              </p>
            </motion.div>
          )}

          {query && results.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <SearchIcon className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="font-serif text-2xl text-foreground mb-3">
                  Nothing Found
                </h2>
                <p className="text-muted-foreground mb-8">
                  Sorry, but nothing matched your search terms. Please try again
                  with different keywords.
                </p>
                <Link to="/">
                  <Button variant="hero" size="lg" className="rounded-full">
                    <ArrowRight className="w-4 h-4" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {results.map((result) => (
                <motion.article
                  key={result.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Link to={result.href}>
                    <div className="p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/30 bg-white hover:shadow-card transition-all duration-300">
                      <div className="flex items-start gap-4">
                        {result.image && (
                          <div className="hidden sm:block w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={result.image}
                              alt={result.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                              {result.category}
                            </span>
                          </div>
                          <h3
                            className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors mb-2"
                            dangerouslySetInnerHTML={{
                              __html: highlightText(result.title, query),
                            }}
                          />
                          <p
                            className="text-muted-foreground line-clamp-2"
                            dangerouslySetInnerHTML={{
                              __html: highlightText(result.description, query),
                            }}
                          />
                          <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                            View Page <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* Empty state when no query */}
          {!query && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                Enter a search term above to find pages, services, and blog posts.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
