import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

// Motion variants for container and items
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

// Define Category type based on API response
interface Category {
  id: number;
  name: string;
  image: string;
  created_at?: string;
  bgGradient?: string; // optional gradient class for overlay
}

const ShopByCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiFetch("/api/categories/");
        if (!response.ok) {
          throw new Error(`Failed to fetch categories: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="flex justify-center items-center h-64 text-green-700 text-xl">
          Loading categories...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="flex flex-col justify-center items-center h-64 text-red-400 text-xl">
          <p>Error loading categories:</p>
          <pre className="mt-2">{error}</pre>
          <button
            className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded"
            onClick={() => {
              setLoading(true);
              setError(null);
              // Trigger refetch
              const fetchCategories = async () => {
                try {
                  const response = await apiFetch("/api/categories/");
                  if (!response.ok) throw new Error(`Failed: ${response.status}`);
                  const data = await response.json();
                  setCategories(data);
                } catch (e) {
                  setError((e as Error).message);
                } finally {
                  setLoading(false);
                }
              };
              fetchCategories();
            }}
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  // Continue with UI rendering using fetched categories
  const featuredCategories = categories.slice(0, 2);
  const regularCategories = categories.slice(2);

  return (
    <section className="relative bg-[#12210f] py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-emerald-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          >
            <SparklesIcon className="w-4 h-4" />
            Shop by Category
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Collections
              </span>
              <div className="absolute bottom-2 left-0 right-0 h-3 bg-emerald-500/20 -rotate-1" />
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Explore our thoughtfully curated range of natural herbal products, crafted to support your journey to wellness.
          </p>
        </motion.div>

        {/* Featured Categories - Large Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {featuredCategories.map((category: Category) => (
            <motion.div
              key={category.name}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/Placeholder.png";
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient ?? 'from-black/80 via-black/40 to-black/20'}`} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-500 text-white mb-4 shadow-lg">
                  {/* Placeholder count */}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  {`Explore our ${category.name} collection`}
                </p>
                  {
                    /* Wrap Explore Collection button in Link to dynamic route based on category name */
                    <Link to={`/${category.name.replace(/[\s&]+/g, '')}Products`}>
                      <motion.button whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-white font-semibold group/btn">
                        <span className="relative">Explore Collection<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover/btn:w-full transition-all duration-300" /></span>
                        <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  }
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500/80 to-teal-600/80 mix-blend-overlay`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regular Categories - Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regularCategories.map((category: Category) => {
            const path = category.name === "Poojas" ? "/PoojaProducts" : `/${category.name.replace(/[\s&]+/g, '')}Products`;
            return (
              <Link
                key={category.name}
                to={path}
                className="block"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden h-[300px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "/Placeholder.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="transform group-hover:translate-y-0 translate-y-1 transition-transform duration-500">
                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-500 text-white mb-3 shadow-lg">
                      {/* Placeholder count */}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {`Explore our ${category.name} collection`}
                    </p>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group/btn"
                      >
                        Explore
                        <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t ${category.bgGradient ?? 'from-black/80 via-black/40 to-black/20'}`} />
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-left">
              <p className="text-white font-semibold text-lg">Can't find what you're looking for?</p>
              <p className="text-gray-400 text-sm">Browse our complete catalog of natural products</p>
            </div>
            <Link to="/EveryProducts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                View All Products
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopByCategory;
