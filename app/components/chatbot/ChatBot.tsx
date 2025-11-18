'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { labInfo, researchAreas, currentProjects } from '@/app/data/labData'
import { facultyMembers, postDocFellows } from '@/app/data/team'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

// Knowledge base for the chatbot
const knowledgeBase = {
  greetings: ['hello', 'hi', 'hey', 'greetings'],
  contact: ['contact', 'email', 'phone', 'address', 'location'],
  research: ['research', 'areas', 'topics', 'focus'],
  projects: ['projects', 'current projects', 'ongoing'],
  team: ['team', 'members', 'director', 'professor', 'staff'],
  publications: ['publications', 'papers', 'research papers'],
  about: ['about', 'what is', 'who are', 'tell me about'],
}

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hello! I'm ML Lab Assistant. I can help you with information about our research, projects, team, and more. How can I assist you today?`,
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Greetings
    if (knowledgeBase.greetings.some(greeting => lowerMessage.includes(greeting))) {
      return `Hello! I'm here to help you learn about the Machine Learning Lab at Jeju National University. You can ask me about our research areas, projects, team members, or contact information.`
    }

    // Contact information
    if (knowledgeBase.contact.some(term => lowerMessage.includes(term))) {
      return `📧 Email: ${labInfo.email}\n📞 Phone: ${labInfo.phone}\n📍 Address: ${labInfo.address}\n🕐 Working Hours: ${labInfo.workingHours}\n\nFeel free to reach out to us!`
    }

    // Research areas
    if (knowledgeBase.research.some(term => lowerMessage.includes(term))) {
      const areas = researchAreas.map((area, idx) => `${idx + 1}. ${area.title}: ${area.description}`).join('\n\n')
      return `Our lab focuses on these cutting-edge research areas:\n\n${areas}\n\nWould you like to know more about any specific area?`
    }

    // Projects
    if (knowledgeBase.projects.some(term => lowerMessage.includes(term))) {
      const projects = currentProjects.slice(0, 3).map((project, idx) =>
        `${idx + 1}. ${project.shortTitle} (${project.status}): ${project.description}`
      ).join('\n\n')
      return `We have ${currentProjects.length} active projects. Here are some highlights:\n\n${projects}\n\nVisit our Projects page to see all ongoing research!`
    }

    // Team information
    if (knowledgeBase.team.some(term => lowerMessage.includes(term))) {
      const director = facultyMembers[0]
      return `Our team is led by ${director.name}, ${director.title}.\n\nKey highlights:\n• ${director.publications}+ publications\n• ${director.citations}+ citations\n• h-index: ${director.hIndex}\n\nWe also have ${postDocFellows.length} Post-Doctoral Fellow(s) and talented students. Visit our Team page to meet everyone!`
    }

    // About the lab
    if (knowledgeBase.about.some(term => lowerMessage.includes(term))) {
      const director = facultyMembers[0]
      return `The ${labInfo.fullName} at ${labInfo.university} was established in ${labInfo.established}. We're a leading research group focused on:\n\n• Machine Learning & AI\n• Computer Vision\n• Large Language Models\n• IoT & Edge Computing\n\nDirected by ${director.name}, our lab has published ${director.publications}+ papers and received ${director.citations}+ citations.`
    }

    // Publications
    if (lowerMessage.includes('publication')) {
      const director = facultyMembers[0]
      return `Our lab has published ${director.publications}+ research papers with over ${director.citations} citations. Our work appears in top-tier conferences and journals. Visit our Publications page to explore our research contributions!`
    }

    // LLM related
    if (lowerMessage.includes('llm') || lowerMessage.includes('language model')) {
      const llmProjects = currentProjects.filter(p =>
        p.title.toLowerCase().includes('llm') || p.technologies.some(t => t.toLowerCase().includes('llm'))
      )
      if (llmProjects.length > 0) {
        const projectList = llmProjects.map(p => `• ${p.shortTitle}: ${p.description}`).join('\n')
        return `We have several LLM-focused projects:\n\n${projectList}\n\nWould you like to know more about any of these?`
      }
    }

    // IoT related
    if (lowerMessage.includes('iot') || lowerMessage.includes('edge computing')) {
      return `We have extensive research in IoT & Edge Computing, including:\n\n• Smart Agriculture platforms\n• Edge AI for manufacturing\n• Real-time sensor networks\n• Environmental monitoring systems\n\nOur work combines machine learning with IoT to create intelligent, distributed systems.`
    }

    // AI/ML general
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning')) {
      return `Our AI and Machine Learning research covers:\n\n• Deep Learning & Neural Networks\n• Predictive Modeling\n• Time Series Analysis\n• Pattern Recognition\n• Renewable Energy Optimization\n• Smart Transportation Systems\n\nWe apply ML to solve real-world problems in healthcare, energy, agriculture, and urban planning!`
    }

    // Default response
    return `I can help you with information about:\n\n• Research Areas\n• Current Projects\n• Team Members\n• Publications\n• Contact Information\n\nWhat would you like to know more about?`
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botResponse])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 group"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">ML Lab Assistant</h3>
                  <p className="text-emerald-100 text-xs">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs mt-1 opacity-60">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-2 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                Ask about research, projects, team, or contact info
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
