'use client'

// ─────────────────────────────────────────────────────────────────────────
// Portable Team page for the ERP / professor dashboard.
// Dependencies: framer-motion, lucide-react, Tailwind CSS.
// Also import ./team.css once (for flip cards, neon text, blobs).
// Data comes from ./teamData.ts — edit that file to change people.
// All labels are plain English strings below; edit freely.
// ─────────────────────────────────────────────────────────────────────────

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, ExternalLink, Award, Users, Sparkles } from 'lucide-react'
import { alumniMembers, facultyMembers, postDocFellows, currentStudents } from './teamData'

const initials = (name: string) => name.split(' ').map((n) => n[0]).join('')

// Explicit (Tailwind-safe) colour presets for the two faculty card styles.
const FACULTY_STYLES = [
  {
    glow: 'from-blue-500 via-sky-500 to-cyan-500',
    bar: 'from-blue-500 via-sky-500 to-cyan-500',
    ring: 'border-cyan-400',
    title: 'text-cyan-600 dark:text-cyan-400',
    icon: 'text-cyan-600',
    eduBg: 'bg-cyan-50 dark:bg-gray-700/50',
    eduDot: 'bg-cyan-600',
    badge: 'from-blue-600 to-sky-600',
    btn: 'from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700',
    interest: 'from-blue-50 to-sky-50 border-blue-100 dark:border-blue-800',
    interestDot: 'from-blue-600 to-sky-600',
  },
  {
    glow: 'from-blue-500 via-indigo-500 to-purple-500',
    bar: 'from-blue-500 via-indigo-500 to-purple-500',
    ring: 'border-blue-400',
    title: 'text-blue-600 dark:text-blue-400',
    icon: 'text-blue-600',
    eduBg: 'bg-blue-50 dark:bg-gray-700/50',
    eduDot: 'bg-blue-600',
    badge: 'from-blue-600 to-indigo-600',
    btn: 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
    interest: 'from-blue-50 to-indigo-50 border-blue-100 dark:border-blue-800',
    interestDot: 'from-blue-600 to-indigo-600',
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* ───── Hero ───── */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2070&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f]/85 via-blue-900/70 to-cyan-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6 neon-text drop-shadow-2xl">Our Team</h1>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              Meet the researchers driving our lab&apos;s work in AI and machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Faculty ───── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            icon={<Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
            pill="Leadership"
            pillClass="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            title="Faculty Members"
            titleGradient="from-blue-700 via-sky-600 to-cyan-600"
            subtitle="Our principal investigators and academic leadership."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {facultyMembers.map((member, index) => {
              const s = FACULTY_STYLES[index % FACULTY_STYLES.length]
              const isDirector = index === 0
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${s.glow} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500`} />

                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col">
                    <div className={`h-2 bg-gradient-to-r ${s.bar}`} />

                    <div className="p-8 flex-1 flex flex-col">
                      {/* Photo */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-full border-2 ${s.ring} border-dashed animate-spin opacity-30`} style={{ animationDuration: '20s' }} />
                          <div className={`w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br ${s.glow} p-1.5 shadow-2xl`}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 p-1">
                              {member.image ? (
                                <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                              ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${s.glow} flex items-center justify-center text-white text-3xl font-bold rounded-full`}>
                                  {initials(member.name)}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r ${s.badge} text-white px-5 py-2 rounded-full shadow-xl border-2 border-white dark:border-gray-800`}>
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4" />
                              <span className="font-bold text-xs whitespace-nowrap">{isDirector ? 'Lab Director' : member.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Name + title */}
                      <div className="text-center mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                        <p className={`text-lg font-semibold ${s.title}`}>{member.title}</p>
                      </div>

                      {/* Education */}
                      {member.education && member.education.length > 0 && (
                        <div className="mb-6">
                          <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                            <GraduationCap className={`h-4 w-4 ${s.icon}`} /> Education
                          </h4>
                          <div className="space-y-2">
                            {member.education.slice(0, 3).map((edu, idx) => (
                              <div key={idx} className={`flex items-start gap-2 p-2.5 rounded-lg ${s.eduBg}`}>
                                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${s.eduDot}`} />
                                <p className="font-semibold text-gray-900 dark:text-white text-xs">
                                  {edu.degree} - {edu.institution} ({edu.year})
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Research interests */}
                      {member.researchInterests && member.researchInterests.length > 0 && (
                        <div className="flex-1">
                          <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                            <BookOpen className={`h-4 w-4 ${s.icon}`} /> Research Interests
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {member.researchInterests.slice(0, 6).map((interest, idx) => (
                              <div key={idx} className={`flex items-center gap-1.5 bg-gradient-to-r ${s.interest} dark:from-gray-700 dark:to-gray-700/50 rounded-lg px-2.5 py-2 border`}>
                                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${s.interestDot} rounded-full flex-shrink-0`} />
                                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{interest}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Scholar button */}
                      {member.googleScholar && (
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <a
                            href={member.googleScholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 bg-gradient-to-r ${s.btn} text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg`}
                          >
                            <BookOpen className="h-4 w-4" />
                            <span className="text-sm">Google Scholar</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── Post-Doctoral Fellows ───── */}
      {postDocFellows.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon={<Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
              pill="Research Fellows"
              pillClass="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
              title="Post-Doctoral Fellows"
              titleGradient="from-purple-700 via-pink-600 to-rose-600"
              subtitle="Experienced researchers advancing our core projects."
            />

            <div className="max-w-6xl mx-auto space-y-8">
              {postDocFellows.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
                    <div className="flex flex-col lg:flex-row">
                      {/* Photo left */}
                      <div className="lg:w-80 flex-shrink-0 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-rose-900/30 flex flex-col items-center justify-center p-8">
                        <div className="relative mb-6">
                          <div className="w-56 h-64 rounded-3xl overflow-hidden shadow-xl ring-4 ring-white dark:ring-gray-700">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 flex items-center justify-center text-white text-5xl font-bold">
                                {initials(member.name)}
                              </div>
                            )}
                          </div>
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Award className="h-3.5 w-3.5" />
                              <span className="font-bold text-xs">Post-Doc Fellow</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{member.name}</h3>
                          <p className="text-base text-purple-600 dark:text-purple-400 font-semibold">{member.title}</p>
                        </div>
                      </div>

                      {/* Content right */}
                      <div className="flex-1 p-8 lg:p-10">
                        {member.education && member.education.length > 0 && (
                          <div className="mb-8">
                            <div className="flex items-center gap-3 mb-5">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                                <GraduationCap className="h-5 w-5 text-white" />
                              </div>
                              <h4 className="text-base font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">Education</h4>
                            </div>
                            <div className="space-y-3">
                              {member.education.slice(0, 3).map((edu, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                                  <div>
                                    <p className="font-bold text-gray-900 dark:text-white text-base">{edu.degree}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      {edu.institution} <span className="text-purple-600 dark:text-purple-400">• {edu.year}</span>
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {member.researchInterests && (
                          <div className="mb-8">
                            <div className="flex items-center gap-3 mb-5">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                                <BookOpen className="h-5 w-5 text-white" />
                              </div>
                              <h4 className="text-base font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">Research Interests</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {member.researchInterests.slice(0, 6).map((interest, idx) => (
                                <span key={idx} className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200 dark:border-purple-700 text-center">
                                  {interest}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {member.googleScholar && (
                          <a
                            href={member.googleScholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg w-full"
                          >
                            <BookOpen className="h-5 w-5" />
                            <span>View Google Scholar</span>
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── Students (3D flip cards) ───── */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={<Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
            pill="Research Team"
            pillClass="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            title="Current Students"
            titleGradient="from-blue-700 to-indigo-600"
            subtitle="The students powering our day-to-day research."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStudents.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flip-card h-80"
              >
                <div className="flip-inner">
                  {/* Front */}
                  <div className="flip-face rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col items-center justify-center text-center">
                    <div className="relative w-28 h-28 rounded-full mb-4 overflow-hidden bg-gray-200 dark:bg-gray-700 ring-4 ring-blue-100 dark:ring-blue-900/30">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                          {initials(member.name)}
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>
                    <span className="mt-4 text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">Hover to view profile</span>
                  </div>

                  {/* Back */}
                  <div className="flip-face flip-back rounded-2xl p-6 shadow-xl border border-cyan-400/30 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white flex flex-col">
                    <h3 className="text-base font-bold mb-1">{member.name}</h3>
                    <p className="text-xs text-cyan-100 mb-3">{member.role}</p>
                    {member.researchInterests && (
                      <>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-200 mb-2">Research Interests</p>
                        <div className="flex flex-wrap gap-1.5 mb-auto">
                          {member.researchInterests.slice(0, 5).map((interest, idx) => (
                            <span key={idx} className="bg-white/15 backdrop-blur-sm text-white text-[11px] px-2 py-1 rounded-md border border-white/20">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                    {member.googleScholar && (
                      <a
                        href={member.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-white/20 hover:bg-white/30 rounded-full px-4 py-2 transition-colors border border-white/30"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Google Scholar
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Alumni ───── */}
      {alumniMembers.length > 0 && (
        <section className="pb-20 pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Alumni</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {alumniMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xl font-bold">
                        {initials(member.name)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.role}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{member.title}</p>
                  {member.experience && member.experience.length > 0 && (
                    <p className="text-xs text-gray-500 mt-2">{member.experience[0].position}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── Join Us ───── */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-blue-100 mb-8">We&apos;re always looking for passionate researchers and students.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">Graduate Positions</button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">Research Collaboration</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// ───── Reusable section header ─────
function SectionHeader(props: {
  icon: ReactNode
  pill: string
  pillClass: string
  title: string
  titleGradient: string
  subtitle: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${props.pillClass}`}>
        {props.icon}
        <span className="text-sm font-semibold">{props.pill}</span>
      </div>
      <h2 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${props.titleGradient} bg-clip-text text-transparent`}>
        {props.title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{props.subtitle}</p>
    </motion.div>
  )
}
