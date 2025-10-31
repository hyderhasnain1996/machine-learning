'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, GraduationCap, BookOpen, ExternalLink } from 'lucide-react'
import { teamMembers, alumniMembers } from '../data/team'

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/IMG_5952.JPG)`,
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

      {/* Current Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent"
          >
            Current Members
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:shadow-emerald-500/20"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {member.role}
                  </p>
                  <p className="text-md text-gray-600 dark:text-gray-400">
                    {member.title}
                  </p>
                </div>

                <div className="space-y-4">
                  {member.education && member.education.length > 0 && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-gray-500 mt-1 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Education
                        </p>
                        <div className="space-y-1">
                          {member.education.slice(0, 2).map((edu, idx) => (
                            <p key={idx} className="text-sm text-gray-600 dark:text-gray-300">
                              {edu.degree}, {edu.institution} ({edu.year})
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {member.researchInterests && (
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-gray-500 mt-1 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Research Interests
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {member.researchInterests.slice(0, 4).map((interest, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {member.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500 shrink-0" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline truncate"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}

                  {member.office && (
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {member.office}
                      </span>
                    </div>
                  )}

                  {member.publications && member.publications > 0 && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Publications: {member.publications}
                      </p>
                      {member.citations && (
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Citations: {member.citations}
                        </p>
                      )}
                    </div>
                  )}

                  {(member.googleScholar || member.orcid || member.linkedin) && (
                    <div className="pt-2 flex gap-2">
                      {member.googleScholar && (
                        <a
                          href={member.googleScholar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Scholar
                        </a>
                      )}
                      {member.orcid && (
                        <a
                          href={member.orcid}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" />
                          ORCID
                        </a>
                      )}
                    </div>
                  )}
                </div>
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