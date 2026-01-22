"use client";

import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  Services: ["Web Design", "Digital Marketing", "Content Creation", "SEO"],
  Company: ["Agence", "Our Team", "Careers", "Contact"],
  Resources: ["Blog", "Case Studies", "Portfolio", "Newsletter"],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">
                EP <span className="text-orange-500">Digital</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Your creative partner for exceptional digital experiences. Based
                in Caen, serving clients worldwide.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <MapPin size={18} className="text-orange-500" />
                  <span>123 Rue Saint-Pierre, 14000 Caen</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone size={18} className="text-orange-500" />
                  <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} className="text-orange-500" />
                  <a href="mailto:contact@epdigital.fr">
                    contact@epdigital.fr
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  let href = "#";
                  if (link === "Contact") href = "/contact";
                  if (link === "Agence") href = "/agence";
                  if (link === "Blog") href = "/blog";
                  if (link === "SEO") href = "/referencement";
                  return (
                    <li key={link}>
                      <a
                        href={href}
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              © {currentYear} EP Digital. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 transition-colors"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
