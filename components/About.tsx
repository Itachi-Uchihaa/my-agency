"use client";

import { motion } from "motion/react";
import { CheckCircle, Zap, Target, Users } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const values = [
  {
    icon: Zap,
    title: "Creativity",
    description: "We push boundaries to create unique digital experiences",
  },
  {
    icon: Target,
    title: "Performance",
    description: "Results-driven approach with measurable outcomes",
  },
  {
    icon: Users,
    title: "Innovation",
    description: "Staying ahead with cutting-edge technologies",
  },
];

const testimonials = [
  {
    quote:
      "EP Digital transformed our online presence completely. Their creative approach and technical expertise are unmatched.",
    author: "Sophie Martin",
    role: "CEO, TechStart",
  },
  {
    quote:
      "Working with EP Digital has been a game-changer for our business. They truly understand digital strategy.",
    author: "Marc Dubois",
    role: "Marketing Director, InnovateCo",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Creative Partner in{" "}
              <span className="text-orange-500">Caen</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 2015, EP Digital has been helping businesses thrive in the
              digital landscape. We're a team of passionate designers,
              developers, and strategists dedicated to creating digital
              experiences that make a difference.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our approach combines creativity with data-driven insights to
              deliver solutions that not only look great but drive real business
              results.
            </p>

            <div className="space-y-4">
              {[
                "10+ years of digital expertise",
                "200+ successful projects delivered",
                "100% client satisfaction rate",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjkwNDc4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-orange-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">200+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <value.icon className="text-orange-500" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-gray-50 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-bold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
