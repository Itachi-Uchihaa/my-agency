"use client";

import { motion } from "motion/react";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";
export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1669490893500-97456444f578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwb2ZmaWNlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY5MDk2ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            LET'S WORK TOGETHER
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Dream Project
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Book a free 30-minute consultation and let's turn your vision into
            reality. No pressure, just possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact">
              <motion.button
                className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transition-all text-lg group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Consultation
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>

            <a href="tel:+33123456789">
              <motion.button
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 transition-all text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                +33 1 23 45 67 89
              </motion.button>
            </a>
          </div>

          {/* Quick Contact Options */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+33123456789"
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
              whileHover={{ y: -4 }}
            >
              <Phone className="text-yellow-300 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-white font-bold mb-1">Call Us</div>
              <div className="text-sm text-white/80">Speak to an expert</div>
            </motion.a>

            <motion.a
              href="mailto:contact@epdigital.fr"
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
              whileHover={{ y: -4 }}
            >
              <Mail className="text-pink-300 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-white font-bold mb-1">Email Us</div>
              <div className="text-sm text-white/80">Get a response in 24h</div>
            </motion.a>

            <Link href="/contact">
              <motion.div
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <ArrowRight className="text-purple-300 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-white font-bold mb-1">Contact Form</div>
                <div className="text-sm text-white/80">Fill out details</div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            className="mt-12 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            ✨ Free consultation • No commitment required • Response within 24
            hours
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}