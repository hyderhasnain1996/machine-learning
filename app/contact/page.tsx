'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building, Map, Globe } from 'lucide-react'
import { labInfo } from '../data/labData'

export default function Contact() {
  const [activeMap, setActiveMap] = useState('google')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/mllab.jpeg)`,
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
              Contact Us
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Get in touch with our research team for collaborations, inquiries, or to learn more
              about our work in machine learning and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We'd love to hear from you. Whether you're interested in our research,
                looking for collaboration opportunities, or have questions about our lab,
                don't hesitate to reach out.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:shadow-emerald-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900 dark:to-green-800 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <a
                      href={`mailto:${labInfo.email}`}
                      className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      {labInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:shadow-green-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-200 dark:from-green-900 dark:to-teal-800 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Phone
                    </h3>
                    <a
                      href={`tel:${labInfo.phone}`}
                      className="text-green-600 dark:text-green-400 hover:underline font-medium"
                    >
                      {labInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:shadow-teal-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-900 dark:to-cyan-800 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {labInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:shadow-cyan-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-200 dark:from-cyan-900 dark:to-blue-800 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Office Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Areas Quick Links */}
            <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">🔬 Research Interests</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm flex items-center"><span className="mr-2">🧠</span>Machine Learning</div>
                <div className="text-sm flex items-center"><span className="mr-2">👁️</span>Computer Vision</div>
                <div className="text-sm flex items-center"><span className="mr-2">🔒</span>Blockchain Technology</div>
                <div className="text-sm flex items-center"><span className="mr-2">🌐</span>IoT & Edge Computing</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Building className="h-4 w-4 inline mr-2" />
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="student">Student Application</option>
                  <option value="visiting">Visiting Researcher</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-emerald-200 dark:border-emerald-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                ⚡ We typically respond to inquiries within 24-48 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-emerald-50 to-green-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-4">
              🏛️ Visit Our Lab
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Located at the beautiful Jeju National University, South Korea
            </p>
          </motion.div>
          
          {/* Map Selection Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveMap('google')}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeMap === 'google'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'
                }`}
              >
                <Globe className="h-4 w-4" />
                Google Maps
              </button>
              <button
                onClick={() => setActiveMap('naver')}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeMap === 'naver'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'
                }`}
              >
                <Map className="h-4 w-4" />
                Naver Map
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all">
            <div className="aspect-video rounded-lg overflow-hidden">
              {activeMap === 'google' ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.7847663876876!2d126.56236207641084!3d33.45046985385829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350ce3c1f4a4c567%3A0x7f5b5b2b2b2b2b2b!2sJeju%20National%20University!5e0!3m2!1sen!2skr!4v1699999999999!5m2!1sen!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jeju National University Location - Google Maps"
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  src="https://map.naver.com/v5/search/%EC%A0%9C%EC%A3%BC%EB%8C%80%ED%95%99%EA%B5%90/place/11625154?c=14.54,0,0,0,dh&placePath=%3Fentry%253Dbmp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Jeju National University Location - Naver Map"
                  className="w-full h-full"
                />
              )}
            </div>
            
            {/* Map Info */}
            <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-gray-600 dark:to-gray-700 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Jeju National University
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      102 Jejudaehak-ro, Jeju-si, Jeju-do, Korea 63243
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Department of Computer Engineering
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Machine Learning Lab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}