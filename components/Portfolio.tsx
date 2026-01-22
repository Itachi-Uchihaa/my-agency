"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MDg4MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "A sleek e-commerce platform with a focus on user experience and conversion optimization.",
    results: [
      "45% increase in conversion rate",
      "60% faster page load times",
      "90% positive user feedback",
    ],
  },
  {
    id: 2,
    title: "Brand Identity & Marketing",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjkwNTc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Complete digital transformation for a leading tech startup, from brand strategy to execution.",
    results: [
      "200% increase in organic traffic",
      "150% growth in social engagement",
      "3x ROI on marketing spend",
    ],
  },
  {
    id: 3,
    title: "Creative Content Campaign",
    category: "Content",
    image:
      "https://images.unsplash.com/photo-1616412875447-096e932d893c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY5MDkwMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Multi-channel content campaign featuring video production, photography, and copywriting.",
    results: [
      "5M+ content impressions",
      "85% completion rate on videos",
      "120% increase in brand awareness",
    ],
  },
  {
    id: 4,
    title: "Web Development & UX",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY4OTg0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Custom web application with advanced features and seamless user experience.",
    results: [
      "99.9% uptime achieved",
      "50% reduction in bounce rate",
      "4.8/5 user satisfaction score",
    ],
  },
  {
    id: 5,
    title: "Digital Strategy Consulting",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY5MDE1NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Comprehensive digital strategy development and implementation for enterprise client.",
    results: [
      "300% increase in qualified leads",
      "65% improvement in conversion funnel",
      "8x return on investment",
    ],
  },
  {
    id: 6,
    title: "Visual Branding Project",
    category: "Content",
    image:
      "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY5MDc3NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Complete visual identity system with photography, video, and design assets.",
    results: [
      "Brand recognition up 180%",
      "Featured in 3 major publications",
      "15+ industry awards won",
    ],
  },
];

const categories = ["All", "Web Design", "Marketing", "Content"];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#e55937] text-[#ffe974]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful digital projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-orange-500 text-sm font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View case study</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="p-8">
                  <div className="text-orange-500 font-medium mb-2">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    {selectedProject.description}
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Results Achieved
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
