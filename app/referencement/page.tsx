"use client";

import { motion } from "motion/react";
import {
  Search,
  TrendingUp,
  Users,
  Target,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Rocket,
  Coffee,
  BookOpen,
  Calendar,
} from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";

const tarifsGMB = [
  {
    title: "Création compte et de la fiche Google My Business",
    price: "380€",
    description: [
      "Création de la fiche Google my business et optimisation de la fiche Google",
      "Ajout des informations de votre société ou activité",
      "Optimisation référencement local mots-clés dans votre secteur d'activité",
      "Ajout des photos, logo ou vidéo. Redimensionnés",
      "Ajout des produits ou services",
      "Description optimisée de votre activité pour le SEO",
      "Lien de votre site web à votre fiche Google My Business",
    ],
  },
  {
    title: "Optimisation de la fiche Google My Business (existante)",
    price: "280€",
    description: [
      "Audit et optimisation de la fiche Google My Business (déjà créée)",
      "Ajout des informations de votre société ou activité",
      "Optimisation référencement local mots-clés dans votre secteur d'activité",
      "Ajout des photos, logo ou vidéo. Redimensionnés",
      "Ajout des produits ou services",
      "Description optimisée de votre activité pour le SEO",
      "Lien de votre site web à votre fiche Google My Business",
    ],
  },
  {
    title: "Formation Google My Business",
    price: "150€",
    description: [
      "Formation pour une complète autonomie sur la fiche Google My Business",
      "Formation en visioconférence via Google Teams d'une durée de 1h30",
    ],
  },
  {
    title: 'E.book " Comment créer et optimiser ma fiche Google My Business',
    price: "75€",
    description: [
      "Grâce à notre e.book, créez et optimisez pas à pas votre fiche Google My Business",
      "Le but: Complète autonomie",
    ],
  },
  {
    title:
      "Rendez-vous 30 min pour conseils personnalisés sur votre fiche Google My Business",
    price: "60€",
    description: [
      "Rendez-vous de 30 minutes via Google Teams",
      "Demandez tous les conseils dont vous avez besoin pour optimiser votre fiche Google My Business et boostez votre référencement local",
    ],
  },
];

export default function ReferencementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzY5MDc2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Référencement SEO SEA"
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
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Search className="text-orange-500" size={40} />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Référencement <span className="text-orange-500">SEO SEA</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Développez votre notoriété pour attirer de nouveaux clients
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 mx-auto transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  J'ai un projet !
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>EP Digital</strong> est une agence de communication située
              à <strong>Caen</strong> en Normandie. Nous vous aidons à avoir une
              présence forte sur les réseaux sociaux pour attirer et fidéliser
              de <strong>nouveaux clients</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Avec des millions d'utilisateurs connectés chaque jour, la
              présence sur <strong>les réseaux sociaux</strong> est
              indispensable pour une entreprise.
            </p>
            <p className="text-lg text-orange-500 font-medium">
              Et si on en discutait autour d'un thé ou café ? À vous de choisir
              !
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <TrendingUp className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Développez votre notoriété
              </h3>
              <p className="text-gray-600">
                Soyez présent là où se trouvent vos clients et faites découvrir
                vos services et votre univers.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Users className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fidélisez vos clients
              </h3>
              <p className="text-gray-600">
                Entretenez une relation de proximité avec vos clients pour mieux
                satisfaire leurs besoins.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Target className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Obtenez de nouveaux contacts
              </h3>
              <p className="text-gray-600">
                Tire profit des réseaux sociaux pour susciter la confiance de
                vos prospects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Référencement SEO/SEA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Référencement (SEO/SEA)
              </h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Améliorez votre référencement dès maintenant
              </h3>
              <div className="space-y-4 text-lg text-gray-700 mb-8">
                <p>
                  <strong>Visibilité</strong>
                </p>
                <p>
                  Chaque moteur de recherche, tels que Google, Bing ou encore
                  Yahoo, positionnent votre site dans leurs résultats de
                  recherche. Le but : c'est d'être le mieux placé
                </p>
                <p>
                  Les recherches internet sont votre principale source de
                  trafic : optimisez-la avec EP Digital !
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Vos bénéfices :
                </h4>
                <ul className="space-y-3">
                  {[
                    "Améliorez votre visibilité dans les moteurs de recherche",
                    "Boostez le trafic de votre site internet",
                    "Atteignez vos objectifs : Un meilleur positionnement dans les résultats de recherche attire plus de clients",
                    "Un atout face à vos concurrents : Soyez en tête de votre marché, positionnez-vous devant votre concurrence",
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <motion.button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Devenir number One
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzY5MDc2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Référencement SEO SEA"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google My Business Tarifs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Google My Business : Nos tarifs (HT)
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tarifsGMB.map((tarif, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-500 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    {tarif.price}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {tarif.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tarif.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzbGV0dGVyJTIwZW1haWx8ZW58MXx8fHwxNzY5MDc2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Newsletter"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Newsletter et emailing
              </h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Faites passer votre newsletter comme une lettre à la poste
              </h3>
              <div className="space-y-4 text-lg text-gray-700 mb-8">
                <p>
                  <strong>Communiquer</strong>
                </p>
                <p>
                  La <strong>newsletter</strong> est un e-mail envoyé
                  périodiquement à votre base de données. Il s'agit d'un moyen
                  facile et pratique pour faire passer un message à votre cible.
                  Elle contient des <strong>illustrations</strong> et{" "}
                  <strong>photos</strong>, <strong>des textes</strong> et{" "}
                  <strong>des liens</strong> renvoyant vers votre site internet
                  et vos réseaux sociaux.
                </p>
                <p>
                  C'est une action de <strong>marketing</strong> très utile pour
                  fidéliser ses propres clients et en attirer de nouveaux.{" "}
                  <strong>Entretenez votre e communauté</strong> et communiquez
                  avec !
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Vos bénéfices :
                </h4>
                <ul className="space-y-3">
                  {[
                    "Communiquez, informez, fidélisez vos clients et prospects",
                    "Présentez vos nouveaux produits, vos services et événements plus facilement",
                    "Augmentez le trafic de votre site internet et vos réseaux sociaux en intégrant des liens dans vos mails",
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stratégie Digitale Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stratégie de marketing digital
              </h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                On vous conseille pour votre stratégie digitale
              </h3>
              <div className="space-y-4 text-lg text-gray-700 mb-8">
                <p>
                  <strong>Boostez votre business</strong>
                </p>
                <p>
                  La stratégie de marketing digital permet de développer votre
                  business.
                </p>
                <p>
                  Chez <strong>EP Digital</strong>, nous établissons une
                  stratégie de vos objectifs et les résultats seront clairement
                  définis pour mettre en place des solutions efficaces et
                  adaptées.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Vos bénéfices :
                </h4>
                <ul className="space-y-3">
                  {[
                    "Laissez votre projet entre nos mains et ne perdez plus de temps... car le temps, c'est de l'argent !",
                    "Améliorez votre visibilité grâce à une stratégie qui fonctionne",
                    "Soyez témoin de la hausse de votre chiffre d'affaires",
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <motion.button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Booster mon business
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
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
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY5MDc2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Stratégie digitale"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzY5MDc2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              Prêt à améliorer votre référencement ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui et découvrez comment nous pouvons
              booster votre visibilité en ligne.
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

