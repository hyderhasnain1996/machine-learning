'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, GraduationCap, BookOpen, ExternalLink, Award, Users, Sparkles } from 'lucide-react'
import { alumniMembers, facultyMembers, postDocFellows, currentStudents } from '../data/team'

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/IMG_4147.jpg)`,
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              Our Team
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Meet the brilliant minds behind our cutting-edge research in machine learning
              and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty/Professors Section - Premium Design */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
              <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Leadership</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Faculty Members
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the distinguished professors leading our research initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {facultyMembers.map((member, index) => {
              // Determine gradient colors based on index
              const isFirstProfessor = index === 0;
              const gradientColors = isFirstProfessor
                ? "from-emerald-500 via-green-500 to-teal-500"
                : "from-blue-500 via-indigo-500 to-purple-500";
              const accentColor = isFirstProfessor ? "emerald" : "blue";
              const googleScholarLink = member.name.includes("Yung-Cheol")
                ? "https://scholar.google.com/citations?user=jfGGqJIAAAAJ&hl=ko"
                : "https://scholar.google.com/citations?user=ikuCcYQAAAAJ&hl=ko";

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
                  className="relative group"
                >
                  {/* Gradient border effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${gradientColors} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500`}></div>

                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col">
                    {/* Top gradient bar with blinking indicator */}
                    <div className={`h-2 bg-gradient-to-r ${gradientColors} relative`}>
                      <div className="absolute -top-1 right-4">
                        <span className="relative flex h-3 w-3">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${accentColor}-400 opacity-75`}></span>
                          <span className={`relative inline-flex rounded-full h-3 w-3 bg-${accentColor}-500`}></span>
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      {/* Image Section */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          {/* Blinking decorative dots around image */}
                          <div className={`absolute -top-3 -left-3 w-3 h-3 bg-${accentColor}-400 rounded-full animate-ping opacity-75`}></div>
                          <div className={`absolute -top-3 -left-3 w-3 h-3 bg-${accentColor}-500 rounded-full`}></div>

                          <div className={`absolute top-6 -right-4 w-2 h-2 bg-${isFirstProfessor ? 'green' : 'indigo'}-400 rounded-full animate-pulse`}></div>

                          <div className={`absolute -bottom-3 left-8 w-4 h-4 bg-${isFirstProfessor ? 'teal' : 'purple'}-400 rounded-full animate-ping opacity-75`} style={{ animationDelay: '0.5s' }}></div>
                          <div className={`absolute -bottom-3 left-8 w-4 h-4 bg-${isFirstProfessor ? 'teal' : 'purple'}-500 rounded-full`}></div>

                          <div className={`absolute bottom-12 -right-3 w-2 h-2 bg-${isFirstProfessor ? 'green' : 'indigo'}-300 rounded-full animate-ping opacity-75`} style={{ animationDelay: '1s' }}></div>
                          <div className={`absolute bottom-12 -right-3 w-2 h-2 bg-${isFirstProfessor ? 'green' : 'indigo'}-400 rounded-full`}></div>

                          {/* Rotating ring effect */}
                          <div className={`absolute inset-0 rounded-full border-2 border-${accentColor}-400 border-dashed animate-spin opacity-30`} style={{ animationDuration: '20s' }}></div>

                          {/* Circular Image with animated gradient border */}
                          <div className={`w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br ${gradientColors} p-1.5 shadow-2xl group-hover:shadow-${accentColor}-500/50 transition-all duration-500 animate-pulse`} style={{ animationDuration: '3s' }}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 p-1">
                              {member.image ? (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full rounded-full object-cover"
                                />
                              ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${gradientColors} flex items-center justify-center text-white text-3xl font-bold rounded-full`}>
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Badge with blinking indicator */}
                          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${isFirstProfessor ? 'from-emerald-600 to-green-600' : 'from-blue-600 to-indigo-600'} text-white px-5 py-2 rounded-full shadow-xl border-3 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300`}>
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4" />
                              <span className="font-bold text-xs">{isFirstProfessor ? 'Lab Director' : 'Professor'}</span>
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
                          {member.name}
                        </h3>
                        <p className={`text-lg text-${accentColor}-600 dark:text-${accentColor}-400 font-semibold`}>
                          Professor of Computer Engineering
                        </p>
                      </div>

                      {/* Education & Research */}
                      <div className="space-y-6 flex-1">
                        {/* Education */}
                        <div>
                          <h4 className={`flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide`}>
                            <GraduationCap className={`h-4 w-4 text-${accentColor}-600`} />
                            Education
                          </h4>
                          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            {member.education && member.education.slice(0, 3).map((edu, idx) => (
                              <div key={idx} className={`flex items-start gap-2 p-2.5 bg-${accentColor}-50 dark:bg-gray-700/50 rounded-lg`}>
                                <div className={`w-1.5 h-1.5 bg-${accentColor}-600 rounded-full mt-1.5 flex-shrink-0`}></div>
                                <div>
                                  <p className="font-semibold text-gray-900 dark:text-white text-xs">
                                    {edu.degree} - {edu.institution} ({edu.year})
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Research Interests */}
                        {member.researchInterests && (
                          <div>
                            <h4 className={`flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide`}>
                              <BookOpen className={`h-4 w-4 text-${accentColor}-600`} />
                              Research Interests
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {member.researchInterests.slice(0, 6).map((interest, idx) => (
                                <div key={idx} className={`flex items-center gap-1.5 bg-gradient-to-r ${isFirstProfessor ? 'from-emerald-50 to-green-50' : 'from-blue-50 to-indigo-50'} dark:from-gray-700 dark:to-gray-700/50 rounded-lg px-2.5 py-2 border ${isFirstProfessor ? 'border-emerald-100 dark:border-emerald-800' : 'border-blue-100 dark:border-blue-800'} ${isFirstProfessor ? 'hover:from-emerald-100 hover:to-green-100' : 'hover:from-blue-100 hover:to-indigo-100'} dark:hover:bg-gray-600 transition-all group/item`}>
                                  <div className={`w-1.5 h-1.5 bg-gradient-to-r ${isFirstProfessor ? 'from-emerald-600 to-green-600' : 'from-blue-600 to-indigo-600'} rounded-full flex-shrink-0`}></div>
                                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{interest}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Google Scholar Button */}
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <a
                          href={googleScholarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 bg-gradient-to-r ${isFirstProfessor ? 'from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700' : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'} text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group/btn`}
                        >
                          <BookOpen className="h-4 w-4" />
                          <span className="text-sm">Google Scholar</span>
                          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post-Doctoral Fellows Section */}
      {postDocFellows.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Research Excellence</span>
              </div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Post-Doctoral Fellows
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Accomplished researchers advancing the frontiers of AI and machine learning
              </p>
            </motion.div>

            <div className="max-w-md mx-auto">
              {postDocFellows.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
                    {/* Top gradient bar */}
                    <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>

                    <div className="p-6 flex flex-col flex-1">
                      {/* Photo and Badge */}
                      <div className="flex flex-col items-center mb-6">
                        <div className="relative">
                          <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 p-1 shadow-xl">
                            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 p-0.5">
                              {member.image ? (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-rose-500 flex items-center justify-center text-white text-3xl font-bold rounded-full">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              )}
                            </div>
                          </div>
                          {/* Badge */}
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                            Post-Doc
                          </div>
                        </div>
                      </div>

                      {/* Name and Title */}
                      <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-base text-purple-600 dark:text-purple-400 font-semibold mb-1">
                          {member.role}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {member.title}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                        {member.publications && (
                          <div className="flex items-baseline gap-1">
                            <span className="font-bold text-purple-600 dark:text-purple-400">{member.publications}</span>
                            <span className="text-gray-600 dark:text-gray-400">publications</span>
                          </div>
                        )}
                        {member.citations && (
                          <div className="flex items-baseline gap-1">
                            <span className="font-bold text-pink-600 dark:text-pink-400">{member.citations}</span>
                            <span className="text-gray-600 dark:text-gray-400">citations</span>
                          </div>
                        )}
                        {member.hIndex && (
                          <div className="flex items-baseline gap-1">
                            <span className="text-gray-600 dark:text-gray-400">h-index:</span>
                            <span className="font-bold text-rose-600 dark:text-rose-400">{member.hIndex}</span>
                          </div>
                        )}
                      </div>

                      {/* Education */}
                      {member.education && member.education.length > 0 && (
                        <div className="mb-6">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <GraduationCap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                              Education
                            </h4>
                          </div>
                          <div className="space-y-2 text-center">
                            {member.education.slice(0, 3).map((edu, idx) => (
                              <div key={idx} className="text-sm">
                                <p className="font-semibold text-gray-800 dark:text-gray-200">
                                  {edu.degree}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {edu.institution} ({edu.year})
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Research Interests */}
                      {member.researchInterests && (
                        <div className="mb-6 flex-1">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                              Research Interests
                            </h4>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {member.researchInterests.map((interest, idx) => (
                              <div
                                key={idx}
                                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-xs px-2.5 py-1.5 rounded-lg font-medium border border-purple-200 dark:border-purple-700 text-center"
                              >
                                {interest}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Google Scholar Link */}
                      {member.googleScholar && (
                        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                          <a
                            href={member.googleScholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                          >
                            <BookOpen className="h-4 w-4" />
                            <span>Google Scholar</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Students Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Research Team</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Graduate Students
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our talented researchers pursuing advanced degrees
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStudents.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:shadow-blue-500/10 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center mb-4">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200 dark:bg-gray-700 ring-4 ring-blue-100 dark:ring-blue-900/30">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Research Interests */}
                {member.researchInterests && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Research Interests
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.researchInterests.slice(0, 4).map((interest, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-md"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {member.googleScholar && (
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={member.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Google Scholar
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      {alumniMembers.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            >
              Alumni
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {alumniMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200 dark:bg-gray-700">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {member.title}
                    </p>
                    {member.experience && member.experience.length > 0 && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        {member.experience[0].position}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              We're always looking for passionate researchers and students
              interested in pushing the boundaries of AI and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Graduate Positions
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300">
                Research Collaboration
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}