"use client"

import HeroSlider from "./components/sections/HeroSlider"
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, BookOpen, Award, Eye, Cpu, Zap, User, ExternalLink, GraduationCap, Sun, TrendingUp } from "lucide-react";
import { researchAreas } from "./data/labData";
import { featuredPublications } from "./data/publications";
import { useLanguage } from "./i18n/LanguageContext";
import { translations } from "./i18n/translations";
import { useTerm } from "./i18n/terms";
import TiltCard from "./components/ui/TiltCard";
import SpotlightCard from "./components/ui/SpotlightCard";
import Marquee from "./components/ui/Marquee";
import StatDial from "./components/ui/StatDial";
import Aurora from "./components/ui/Aurora";
import MagneticButton from "./components/ui/MagneticButton";
import { motion as m } from "framer-motion";

export default function Home() {
  const { lang } = useLanguage()
  const th = translations[lang].home
  const k = useTerm()
  const ko = lang === 'ko'
  const tp = translations[lang].publications
  const tt = translations[lang].team
  const localizedAreas = translations[lang].researchAreas

  return (
   
    <main>
      <HeroSlider />
      
      {/* Welcome Section — floats over the hero (Material Kit signature) */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-sky-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden z-20 -mt-12 rounded-t-[2.5rem] shadow-material-lg">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 dark:bg-sky-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/30 rounded-full mb-6 border border-blue-200 dark:border-blue-700">
              <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">{th.innovatingSince}</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.3] px-2">
              <span className="block sm:inline bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-700 bg-clip-text text-transparent">
                {th.welcomeTitle}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {th.welcomeDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Blinking indicator */}
                <div className="absolute -top-2 -right-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                </div>

                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent text-center">
                  {th.aiPowered}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center flex-grow">
                  {th.aiPoweredDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Blinking indicator */}
                <div className="absolute -top-2 -right-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                </div>

                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent text-center">
                  {th.researchDriven}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center flex-grow">
                  {th.researchDrivenDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Blinking indicator */}
                <div className="absolute -top-2 -right-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                  </span>
                </div>

                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-purple-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-center">
                  {th.globalImpact}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center flex-grow">
                  {th.globalImpactDesc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Marquee Band */}
      <section className="py-10 bg-white dark:bg-[#0a0f1f] border-y border-blue-100 dark:border-blue-500/20">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-blue-500/70 dark:text-cyan-400/70 mb-6">
          {ko ? '기술 및 연구 분야' : 'Technologies & Research Domains'}
        </p>
        <Marquee
          items={[
            "Solar PV Segmentation", "Satellite Solar Mapping", "Global MPPT", "Probabilistic Forecasting",
            "Physics-Informed AI", "Meta-Learning", "Conformal Prediction", "Uncertainty Quantification",
            "Grid-State Forecasting", "Energy Demand Forecasting", "Vision-Language Models",
            "Real-Time Video Segmentation", "Knowledge Distillation", "Super-Resolution", "Edge AI",
            "Adaptive RAG", "Reinforcement Learning", "Explainable AI", "Smart Farming AI",
          ].map(k)}
        />
      </section>

      {/* Animated Impact Counters */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-700">
        <Aurora />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-10 w-[28rem] h-[28rem] bg-blue-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:40px_40px] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl font-black text-white mb-4"
          >
            {ko ? '실제 세계에 영향을 주는 연구' : 'Driving Real-World Impact'}
          </m.h2>
          <p className="text-center text-blue-100 text-lg mb-14 max-w-2xl mx-auto">
            {ko ? '20여 년의 AI 연구를 논문, 프로젝트, 글로벌 협력으로 이어가고 있습니다.' : 'Two decades of AI research, translated into publications, projects, and global collaboration.'}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "396+", label: ko ? "논문" : "Publications", percent: 88 },
              { value: "50+", label: ko ? "연구 프로젝트" : "Research Projects", percent: 72 },
              { value: "20+", label: ko ? "연구 경력(년)" : "Years of Excellence", percent: 95 },
              { value: "7777+", label: ko ? "인용" : "Citations", percent: 80 },
            ].map((stat, i) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <SpotlightCard className="flex justify-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-material-lg hover:border-cyan-300/60 transition-colors h-full">
                  <StatDial value={stat.value} label={stat.label} percent={stat.percent} delay={i * 120} />
                </SpotlightCard>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Decorative animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-sky-300/20 dark:bg-sky-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Blinking accent dots */}
        <div className="absolute top-10 right-20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
        </div>
        <div className="absolute bottom-10 left-20">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-600"></span>
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/30 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">{th.researchAreasTitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              {th.researchAreasTitle}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {th.researchAreasSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {researchAreas.slice(0, 4).map((area, index) => {
              const localArea = localizedAreas[index]
              // Map icons for each research area
              const getIcon = (areaId: string) => {
                switch(areaId) {
                  case 'solar-pv':
                    return <Sun className="h-10 w-10 text-white" />;
                  case 'energy-forecasting':
                    return <TrendingUp className="h-10 w-10 text-white" />;
                  case 'efficient-vision':
                    return <Eye className="h-10 w-10 text-white" />;
                  case 'trustworthy-llm':
                    return <Brain className="h-10 w-10 text-white" />;
                  default:
                    return <Zap className="h-10 w-10 text-white" />;
                }
              };

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  <TiltCard className="relative h-full holo-border rounded-3xl">
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  <div className="shimmer-card relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                    {/* Blinking status indicator */}
                    <div className="absolute -top-2 -right-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                      </span>
                    </div>

                    <div className="flex items-start gap-6">
                      {/* Enhanced icon with animations */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {getIcon(area.id)}
                        </div>
                        {/* Pulsing ring around icon */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {localArea?.title ?? area.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                          {localArea?.description ?? area.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {area.keywords.slice(0, 3).map((keyword, idx) => (
                            <span key={idx} className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/30 dark:to-sky-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium group-hover:scale-105 transition-transform">
                              {k(keyword)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <MagneticButton
              href="/research"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-10 py-4 rounded-full font-bold hover:from-blue-700 hover:to-sky-700 transition-all shadow-material-blue hover:shadow-2xl group/btn"
            >
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-blue-400/50 rounded-full blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
              <span className="relative flex items-center gap-2">
                {th.exploreResearch}
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Decorative animated blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-sky-300/20 dark:bg-sky-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Blinking accent dots */}
        <div className="absolute top-10 left-20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
        </div>
        <div className="absolute bottom-10 right-20">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-600"></span>
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/30 px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">{th.latestResearch}</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-700 bg-clip-text text-transparent">
              {th.featuredPublications}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {th.featuredPublicationsSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPublications.slice(0, 3).map((publication, index) => {
              const lp = th.featuredPubs[index]
              return (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <TiltCard className="relative h-full holo-border rounded-3xl">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                <div className="shimmer-card relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Blinking status indicator */}
                  <div className="absolute -top-2 -right-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                  </div>

                  {/* Header with badges */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="relative flex h-2 w-2">
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></div>
                        <div className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></div>
                      </div>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {publication.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gradient-to-r from-blue-500 to-sky-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                        {tp.featured}
                      </span>
                    </div>
                  </div>

                  {/* Publication icon/visual */}
                  <div className="relative w-20 h-20 mb-6 mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight line-clamp-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {lp?.title ?? publication.title}
                    </h3>

                    {/* Authors */}
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">
                        {publication.authors.slice(0, 2).join(", ")}
                        {publication.authors.length > 2 && ` +${publication.authors.length - 2} ${tp.moreAuthors}`}
                      </span>
                    </div>

                    {/* Journal */}
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 line-clamp-2">
                        {publication.journal}
                      </span>
                    </div>

                    {/* Abstract preview */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                      {lp?.abstract ?? publication.abstract}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">{tp.impactFactor}</div>
                      <div className="bg-gradient-to-r from-blue-500 to-sky-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md group-hover:scale-105 transition-transform">
                        {publication.impactFactor}
                      </div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all hover:scale-110">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                </TiltCard>
              </motion.div>
            )})}
          </div>

          <div className="text-center">
            <MagneticButton
              href="/publications"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-10 py-4 rounded-full font-bold hover:from-blue-700 hover:to-sky-700 transition-all shadow-material-blue hover:shadow-2xl group/btn"
            >
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-blue-400/50 rounded-full blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
              <span className="relative flex items-center gap-2">
                {th.viewAllPublications}
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-sky-200 dark:bg-sky-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">{tt.leadership}</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-700 bg-clip-text text-transparent">
              {th.labDirector}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {th.labDirectorSubtitle}
            </p>
          </motion.div>

          {/* Director Card */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col">
                {/* Top gradient bar with blinking indicator */}
                <div className="h-2 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 relative">
                  <div className="absolute -top-1 right-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Image Section */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      {/* Blinking decorative dots around image */}
                      <div className="absolute -top-3 -left-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute -top-3 -left-3 w-3 h-3 bg-blue-500 rounded-full"></div>

                      <div className="absolute top-6 -right-4 w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>

                      <div className="absolute -bottom-3 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute -bottom-3 left-8 w-4 h-4 bg-cyan-500 rounded-full"></div>

                      <div className="absolute bottom-12 -right-3 w-2 h-2 bg-sky-300 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute bottom-12 -right-3 w-2 h-2 bg-sky-400 rounded-full"></div>

                      {/* Rotating ring effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400 border-dashed animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>

                      {/* Circular Image with animated gradient border */}
                      <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 via-sky-500 to-cyan-500 p-1.5 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500 animate-pulse" style={{ animationDuration: '3s' }}>
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 p-1">
                          <img
                            src="/Prof.png"
                            alt="Prof. Dr. Yung-Cheol Byun"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Badge with blinking indicator */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-5 py-2 rounded-full shadow-xl border-3 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span className="font-bold text-xs">{th.labDirector}</span>
                          <span className="relative flex h-1.5 w-1.5 ml-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Prof. Dr. Yung-Cheol Byun
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {th.professorTitle}
                    </p>
                  </div>

                  {/* Education & Research */}
                  <div className="space-y-6 flex-1">
                    {/* Education */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                        {th.education}
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        {th.educationList.map((entry, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2.5 bg-blue-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="font-semibold text-gray-900 dark:text-white text-xs">{entry}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Research Interests */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        <Brain className="h-4 w-4 text-blue-600" />
                        {th.researchInterestsLabel}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {th.researchInterestsList.map((interest, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-gray-700 dark:to-gray-700/50 rounded-lg px-2.5 py-2 border border-blue-100 dark:border-blue-800 hover:from-blue-100 hover:to-sky-100 dark:hover:bg-gray-600 transition-all group/item">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{interest}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Google Scholar Button */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="https://scholar.google.com/citations?user=jfGGqJIAAAAJ&hl=ko"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-sky-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group/btn"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm">Google Scholar</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-sky-700 transition-all group transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {th.viewFullTeam}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:30px_30px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              🚀 {th.ctaTitle}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {th.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                💬 {th.contactUs}
              </Link>
              <Link
                href="/research"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                🔬 {th.exploreResearch}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
  
}
