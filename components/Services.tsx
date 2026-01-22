"use client";

import { motion } from "motion/react";
import { Palette, TrendingUp, Camera, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const services = [
  {
    icon: Palette,
    title: "Web Design & UI/UX",
    description:
      "Beautiful, intuitive interfaces that captivate users and drive engagement. We create experiences that people love to use.",
    image:
      "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY5MDc3NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description:
      "Data-driven strategies that boost visibility and conversions. We help your brand reach the right audience at the right time.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjkwNTc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Compelling stories through photo, video, and copy. We craft content that resonates with your audience and amplifies your message.",
    image:
      "https://images.unsplash.com/photo-1616412875447-096e932d893c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY5MDkwMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#e55937] text-[#ffe974]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-4" style={{ fontFamily: "var(--font-raleway)" }}>
            Our Expertise
          </h2>
          <p className="text-xl  max-w-2xl mx-auto" style={{ fontFamily: "var(--font-raleway)" }}>
            We blend creativity with strategy to deliver exceptional digital
            solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <service.icon size={40} className="text-orange-500" />
                </div>
              </div>

              <div className="p-6 bg-[#ffe974]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title} zola
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-orange-500 font-medium flex items-center gap-2 hover:gap-3 transition-all group/btn">
                  Learn more
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
