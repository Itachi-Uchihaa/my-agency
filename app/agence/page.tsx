"use client";

import { motion } from "motion/react";
import {
  Coffee,
  Bike,
  MapPin,
  ArrowRight,
  Handshake,
} from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";

export default function AgencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2OTA3NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Notre équipe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-900/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Notre <span className="text-orange-500">Agence</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Une équipe de passionnés basée à Caen, prête à relever vos défis
              digitaux
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Présentez-nous Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Présentez-nous
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
              <p className="text-xl leading-relaxed">
                Nous sommes toujours prêts à relever des défis.
              </p>
              <p className="text-lg leading-relaxed">
                Nous sommes une agence web Normande basée à Caen à environ 18
                minutes de la mer et 2 min du port.
              </p>
              <p className="text-lg leading-relaxed">
                Nous aimons la vie au grand air, nous nous déplaçons tous à vélo
                et nous adorons nos moments de détente et prendre un café à
                l'entrée du Moho.
              </p>
              <p className="text-lg leading-relaxed">
                L'équipe boit des litres de café serré (et aussi du thé !) et on
                adore nous creuser la cervelle pour que chaque pixel soit à sa
                place.
              </p>
            </div>

            {/* Location & Lifestyle Icons */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <motion.div
                className="text-center p-6 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <MapPin className="text-orange-500" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Caen, Normandie</h3>
                <p className="text-gray-600 text-sm">
                  18 min de la mer
                  <br />
                  2 min du port
                </p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Bike className="text-orange-500" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Mobilité douce</h3>
                <p className="text-gray-600 text-sm">
                  Nous nous déplaçons tous à vélo
                </p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Coffee className="text-orange-500" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Café & Thé</h3>
                <p className="text-gray-600 text-sm">
                  Des litres de café serré et du thé au Moho
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre Objectif, Bonheur, ADN */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NOTRE OBJECTIF
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vous accompagner dans la conception d'un projet digital à
                l'image de votre entreprise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NOTRE BONHEUR
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Quand des clients nous disent « Je vais vous recommander à tous
                mes contacts ». Le reste c'est du bonus.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NOTRE ADN
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Travailler avec une équipe de passionnés qui adorent les lundis
                matin.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <Handshake className="text-orange-500" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Collaborer c'est la clé du succès !
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Étant donné que les meilleures décisions ne se prennent pas
                  isolément, nous travaillons en équipe, accompagnés de notre
                  fidèle allié, le café, pour faire progresser votre projet et
                  réaliser vos objectifs.
                </p>
                <p>
                  Nous disposons de vastes salles de réunion au Moho, offrant un
                  cadre idéal pour fusionner nos forces avec les vôtres et
                  former une équipe soudée.
                </p>
                <p>
                  Notre mission consiste à véhiculer les valeurs de votre
                  entreprise à travers chacune de nos actions, tout en
                  atteignant vos objectifs.
                </p>
                <p>
                  Nous mettons à profit notre expertise et notre savoir-faire
                  pour vous accompagner dans une communication captivante, en
                  élaborant une stratégie solide et adaptée à vos besoins.
                </p>
                <p>
                  En tant qu'agence web, EP Digital met également à votre
                  service son expérience et sa maîtrise pour stimuler votre
                  croissance, en définissant une stratégie digitale efficace et
                  performante.
                </p>
                <p className="font-bold text-orange-500 text-xl">
                  C'est une situation gagnante pour tous !
                </p>
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2OTA3NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Collaboration d'équipe"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-orange-500 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold mb-2">Ensemble</div>
                <div className="text-sm">On va plus loin</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2OTA3NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à collaborer avec nous ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui et découvrez comment nous pouvons
              transformer votre projet digital en succès.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 mx-auto shadow-2xl hover:shadow-3xl transition-all text-lg group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Nous contacter
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

