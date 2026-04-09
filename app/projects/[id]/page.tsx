'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Cpu,
  Zap,
  BarChart3,
  GitBranch,
  Type,
  ScanSearch,
  CheckCircle2,
  Target,
  Sparkles,
  ChevronRight,
  Gauge,
  Layers,
  FlaskConical,
  Server,
  Activity,
  Eye,
  Play,
  MonitorPlay,
} from 'lucide-react'
import { currentProjects } from '../../data/labData'
import { useLanguage } from '../../i18n/LanguageContext'
import { translations } from '../../i18n/translations'

const moduleIconMap: Record<string, React.ElementType> = {
  Type,
  ScanSearch,
  Zap,
  BarChart3,
  GitBranch,
  Cpu,
  Eye,
  Layers,
  FlaskConical,
  Server,
  Activity,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { lang } = useLanguage()
  const t = translations[lang].projectDetail
  const project = currentProjects.find((p) => p.id === Number(id))

  if (!project) notFound()

  const { details } = project

  // Localized project content (title, description, rich sections)
  const projectIndex = currentProjects.indexOf(project)
  const lp = translations[lang].currentProjects[projectIndex] as typeof translations['en']['currentProjects'][0] & {
    overview?: string
    researchProblem?: string
    howItWorks?: { step: number; title: string; description: string }[]
    architectureComponents?: { name: string; description: string }[]
    whyDifferent?: string
    propagationDescription?: string
    confidenceSignals?: { name: string; description: string }[]
    confidenceDescription?: string
    edgeDescription?: string
  }

  const localTitle = lp?.title ?? project.title
  const localDescription = lp?.description ?? project.description
  const localTechnologies = project.technologies
  const localKeyFeatures = project.keyFeatures

  const localOverview = lp?.overview ?? details?.overview
  const localResearchProblem = lp?.researchProblem ?? details?.researchProblem
  const localHowItWorks = lp?.howItWorks ?? details?.howItWorks
  const localArchComponents = lp?.architectureComponents?.map((c, i) => ({
    ...details?.architectureComponents[i],
    name: c.name,
    description: c.description,
  })) ?? details?.architectureComponents
  const localWhyDifferent = lp?.whyDifferent ?? details?.whyDifferent
  const localPropagationDescription = lp?.propagationDescription ?? details?.propagationDesign?.description
  const localConfidenceSignals = lp?.confidenceSignals ?? details?.confidenceSignals
  const localConfidenceDescription = lp?.confidenceDescription ?? details?.confidenceDescription
  const localEdgeDescription = lp?.edgeDescription ?? details?.edgeDeployment?.description

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      {/* ───────────── HERO ───────────── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '65vh' }}>

        {/* Background layers */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.image})` }} />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Animated glow orbs */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.8) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.9) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { size: 'w-1 h-1', left: '8%', top: '20%', delay: 0 },
            { size: 'w-2 h-2', left: '15%', top: '60%', delay: 0.5 },
            { size: 'w-1 h-1', left: '25%', top: '35%', delay: 1 },
            { size: 'w-1.5 h-1.5', left: '40%', top: '75%', delay: 0.3 },
            { size: 'w-1 h-1', left: '55%', top: '15%', delay: 1.5 },
            { size: 'w-2 h-2', left: '65%', top: '50%', delay: 0.8 },
            { size: 'w-1 h-1', left: '75%', top: '80%', delay: 0.2 },
            { size: 'w-1.5 h-1.5', left: '85%', top: '30%', delay: 1.2 },
            { size: 'w-1 h-1', left: '92%', top: '65%', delay: 0.6 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className={`absolute ${p.size} bg-white/50 rounded-full`}
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -25, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16">

          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-all duration-200 mb-10 group w-fit"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all">
                <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <span className="text-sm font-medium tracking-wide">{t.backToProjects}</span>
            </Link>
          </motion.div>

          {/* Title block — centered, max width */}
          <div className="max-w-3xl">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/25 text-white text-xs font-semibold uppercase tracking-widest">
                <Cpu className="h-3 w-3 text-cyan-300" />
                {project.category}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                {project.status}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/70 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="h-3 w-3 text-yellow-300" />
                {project.shortTitle}
              </span>
            </motion.div>

            {/* Accent line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-cyan-300/90 text-sm font-bold uppercase tracking-[0.2em] mb-4"
            >
              {t.researchProject}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6 text-white drop-shadow-2xl"
            >
              {localTitle}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              {localDescription}
            </motion.p>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white/70 text-xs font-medium hover:bg-white/20 hover:text-white transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-white/25 rounded-full flex items-start justify-center p-1.5">
            <motion.div className="w-1 h-1 bg-white/60 rounded-full" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* ───────────── MAIN CONTENT ───────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {details && (
          <>
            {/* ── Overview + Research Problem ── */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Overview */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative group h-full">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500`} />
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <Layers className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.overview}</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{localOverview}</p>
                  </div>
                </div>
              </motion.div>

              {/* Research Problem */}
              <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative group h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.researchProblem}</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{localResearchProblem}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── How It Works ── */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="text-center mb-10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}>
                  <Activity className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">{t.pipeline}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.howItWorks}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {(localHowItWorks ?? []).map((step, i) => (
                  <motion.div key={step.step} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="relative group h-full">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-50 transition duration-500`} />
                      <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-7 shadow-xl h-full flex flex-col">
                        {/* Step number */}
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                          <span className="text-white font-bold text-lg">{step.step}</span>
                        </div>
                        {/* Connector */}
                        {i < (localHowItWorks ?? []).length - 1 && (
                          <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                            <ChevronRight className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                          </div>
                        )}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Architecture Diagram ── */}
            {details.architectureImage && (
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
                    <Cpu className="h-4 w-4 text-white" />
                    <span className="text-sm font-semibold text-white">{t.architectureDiagram}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.modelArchitecture}</h2>
                </div>
                <div className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-25 group-hover:opacity-45 transition duration-700`} />
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Top bar */}
                    <div className={`bg-gradient-to-r ${project.gradient} px-6 py-3 flex items-center gap-3`}>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </div>
                      <span className="text-white/90 text-sm font-medium ml-2">{`ConfTrackNet — ${t.fullPipelineLabel}`}</span>
                    </div>
                    {/* Image */}
                    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                      <img
                        src={details.architectureImage.src}
                        alt="Model Architecture"
                        className="w-full h-auto rounded-xl shadow-lg object-contain"
                      />
                    </div>
                    {/* Caption */}
                    <div className="px-6 sm:px-10 py-5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-center italic">
                        {details.architectureImage.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Architecture Components ── */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
                  <Cpu className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">{t.architecture}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.coreArchitectureTitle}</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                  {t.coreArchitectureDesc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(localArchComponents ?? []).map((comp, i) => {
                  const Icon = moduleIconMap[comp.icon] ?? Cpu
                  const gradients = [
                    'from-violet-500 to-purple-600',
                    'from-blue-500 to-cyan-600',
                    'from-emerald-500 to-teal-600',
                    'from-orange-500 to-amber-600',
                    'from-rose-500 to-pink-600',
                  ]
                  const g = gradients[i % gradients.length]
                  return (
                    <motion.div key={i} variants={fadeUp} custom={i * 0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <div className="group relative h-full">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${g} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500`} />
                        <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg h-full flex flex-col gap-4">
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${g} flex items-center justify-center shadow-md`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{comp.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{comp.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* ── Why It's Different + Propagation Design ── */}
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Why Different - wider */}
              <motion.div className="lg:col-span-3" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative group h-full">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-25 group-hover:opacity-45 transition duration-500`} />
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.whatMakesDifferent}</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{localWhyDifferent}</p>
                  </div>
                </div>
              </motion.div>

              {/* Propagation Design stats */}
              {details.propagationDesign && (
                <motion.div className="lg:col-span-2" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="relative group h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-45 transition duration-500" />
                    <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl h-full">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.propagationDesign}</h2>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{localPropagationDescription}</p>
                      <div className="space-y-3">
                        {[
                          { label: t.totalParams, value: details.propagationDesign.params },
                          { label: t.trainableParams, value: details.propagationDesign.trainableParams },
                          { label: t.inferenceSpeed, value: details.propagationDesign.speed },
                        ].map((stat) => (
                          <div key={stat.label} className="flex items-center justify-between py-2.5 border-b border-gray-100 dark:border-gray-700 last:border-0">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Confidence Estimation ── */}
            {details.confidenceSignals && (
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative overflow-hidden rounded-3xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-95`} />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                  <div className="relative p-10">
                    <div className="text-center mb-10">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-4 border border-white/30">
                        <BarChart3 className="h-4 w-4 text-white" />
                        <span className="text-sm font-semibold text-white">{t.multiSignalFusion}</span>
                      </div>
                      <h2 className="text-3xl font-bold text-white">{t.confidenceEstimation}</h2>
                      {localConfidenceDescription && (
                        <p className="text-white/80 mt-3 max-w-2xl mx-auto">{localConfidenceDescription}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {(localConfidenceSignals ?? []).map((signal, i) => (
                        <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                <span className="text-white font-bold">{i + 1}</span>
                              </div>
                              <h3 className="font-bold text-white">{signal.name}</h3>
                            </div>
                            <p className="text-white/75 text-sm leading-relaxed">{signal.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Performance Results ── */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-4">
                  <Gauge className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">{t.benchmarks}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.performanceResults}</h2>
                {details.performance.improvement && (
                  <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xl mx-auto">{details.performance.improvement}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {details.performance.datasets.map((ds, i) => (
                  <motion.div key={ds.name} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
                      <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl">
                        {/* Dataset header */}
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{ds.name}</h3>
                            {ds.setting && (
                              <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">{ds.setting}</span>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{ds.fps}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">FPS</div>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {ds.metrics.map((m) => (
                            <div key={m.label} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-800">
                              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{m.value}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{m.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Latency */}
                        <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t.latency}</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{ds.latency}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Qualitative Results ── */}
            {details.qualitativeResultsImage && (
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mb-4">
                    <Eye className="h-4 w-4 text-white" />
                    <span className="text-sm font-semibold text-white">{t.visualResults}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.qualitativeResults}</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto text-sm">
                    {t.qualitativeSubDesc}
                  </p>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-45 transition duration-700" />
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Top bar */}
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </div>
                      <span className="text-white/90 text-sm font-medium ml-2">{`ConfTrackNet — ${t.segmentationLabel}`}</span>
                    </div>
                    {/* Row labels + image */}
                    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                      {/* Legend */}
                      <div className="flex flex-wrap gap-4 mb-5 justify-center">
                        {[
                          { color: 'bg-gray-400', label: t.inputFrames },
                          { color: 'bg-blue-500', label: t.groundTruth },
                          { color: 'bg-violet-500', label: t.predictions },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${item.color}`} />
                            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{item.label}</span>
                          </div>
                        ))}
                      </div>
                      <img
                        src={details.qualitativeResultsImage.src}
                        alt="Qualitative Results"
                        className="w-full h-auto rounded-xl shadow-lg object-contain"
                      />
                    </div>
                    {/* Caption */}
                    <div className="px-6 sm:px-10 py-5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-center italic">
                        {details.qualitativeResultsImage.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Edge Deployment ── */}
            {details.edgeDeployment && (
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                  {/* Glow blobs */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 rounded-full filter blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl" />

                  <div className="relative p-8 lg:p-10">
                    {/* Top: specs + metrics */}
                    <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
                      {/* Left: Info */}
                      <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                          <Server className="h-4 w-4 text-purple-300" />
                          <span className="text-sm font-semibold text-purple-200">{t.edgeAIBadge}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">{t.edgeDeployment}</h2>
                        <p className="text-slate-300 leading-relaxed mb-8">{localEdgeDescription}</p>

                        {/* Hardware specs */}
                        <div className="space-y-3">
                          {[
                            { label: t.hardware, value: details.edgeDeployment.hardware },
                            { label: t.powerMode, value: details.edgeDeployment.powerMode },
                            { label: t.precision, value: details.edgeDeployment.precision },
                          ].map((spec) => (
                            <div key={spec.label} className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0">
                              <span className="text-sm text-slate-400">{spec.label}</span>
                              <span className="text-sm font-semibold text-white">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Metrics */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center">
                            <div className="text-4xl font-bold text-purple-300">~{details.edgeDeployment.fps}</div>
                            <div className="text-sm text-slate-400 mt-1">FPS</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center">
                            <div className="text-4xl font-bold text-indigo-300">{details.edgeDeployment.latency}</div>
                            <div className="text-sm text-slate-400 mt-1">Latency</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {details.edgeDeployment.metrics.map((m) => (
                            <div key={m.label} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
                              <div className="text-2xl font-bold text-cyan-300">{m.value}</div>
                              <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ── Real-Time Demo Videos ── */}
                    {details.edgeDeployment.realtimeVideos && details.edgeDeployment.realtimeVideos.length > 0 && (
                      <div>
                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-8">
                          <div className="flex-1 h-px bg-white/10" />
                          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <MonitorPlay className="h-4 w-4 text-violet-300" />
                            <span className="text-sm font-semibold text-violet-200">{t.realtimeBadge}</span>
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
                            </span>
                          </div>
                          <div className="flex-1 h-px bg-white/10" />
                        </div>

                        <p className="text-slate-400 text-sm text-center mb-8 max-w-2xl mx-auto">
                          {t.realtimeDesc}
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                          {details.edgeDeployment.realtimeVideos.map((vid, i) => (
                            <motion.div
                              key={i}
                              variants={fadeUp}
                              custom={i * 0.15}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                            >
                              <div className="group rounded-2xl overflow-hidden border border-white/10 bg-black/40 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]">
                                {/* Label bar */}
                                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                                  <Play className="h-3.5 w-3.5 text-violet-400 fill-violet-400" />
                                  <span className="text-xs font-semibold text-slate-300 truncate">{vid.label}</span>
                                  <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-medium flex-shrink-0">
                                    <span className="relative flex h-1.5 w-1.5">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                                    </span>
                                    {t.live}
                                  </span>
                                </div>
                                {/* Video player */}
                                <video
                                  src={vid.src}
                                  controls
                                  muted
                                  loop
                                  playsInline
                                  className="w-full block bg-black"
                                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Technologies + Key Features ── */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Technologies */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative group h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Cpu className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.technologies}</h2>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full font-medium border border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative group h-full">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500`} />
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.keyFeatures}</h2>
                    </div>
                    <div className="space-y-3">
                      {(lp?.keyFeatures ?? project.keyFeatures).map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}

        {/* ── Back button ── */}
        <motion.div className="pt-4 flex justify-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Link
            href="/projects"
            className={`inline-flex items-center gap-3 bg-gradient-to-r ${project.gradient} text-white px-10 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group`}
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            {t.backToAllProjects}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
