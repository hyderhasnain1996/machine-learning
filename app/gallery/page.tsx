'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: "/ios-1.jpeg",
    alt: "Lab Event 1",
    category: "events"
  },
  {
    id: 2,
    src: "/img-4400.jpg",
    alt: "Lab Activity 1",
    category: "activities"
  },
  {
    id: 3,
    src: "/IMG_5952.JPG",
    alt: "Team Photo 1",
    category: "team"
  },
  {
    id: 4,
    src: "/IMG_6522.JPG",
    alt: "Team Photo 2",
    category: "team"
  },
  {
    id: 5,
    src: "/IMG_5371.JPG",
    alt: "Team Photo 3",
    category: "team"
  },
  {
    id: 6,
    src: "/gal.jpg",
    alt: "Lab Activity 2",
    category: "activities"
  },
  {
    id: 7,
    src: "/1652954862334.jpeg",
    alt: "Lab Event 2",
    category: "events"
  },
  {
    id: 8,
    src: "/IMG_6546.JPG",
    alt: "Team Photo 4",
    category: "team"
  },
  {
    id: 9,
    src: "/1724247130065-23.JPG",
    alt: "Recent Event 1",
    category: "events"
  },
  {
    id: 10,
    src: "/img-6213.jpg",
    alt: "Lab Activity 3",
    category: "activities"
  },
  {
    id: 11,
    src: "/IMG_6563.JPG",
    alt: "Team Photo 5",
    category: "team"
  },
  {
    id: 12,
    src: "/20210812-174805.jpeg",
    alt: "Lab Event 3",
    category: "events"
  },
  {
    id: 13,
    src: "/mllab.jpeg",
    alt: "ML Lab",
    category: "facilities"
  }
]

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'team', name: 'Team Photos' },
  { id: 'events', name: 'Events' },
  { id: 'activities', name: 'Activities' },
  { id: 'facilities', name: 'Facilities' }
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/gal.jpg)`,
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
              Gallery
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Explore moments from our lab activities, team events, research presentations,
              and memorable experiences at Machine Learning Lab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {image.alt}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                    {image.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400">
                <svg className="mx-auto h-16 w-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">No photos found</h3>
                <p>Try selecting a different category.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">
                {selectedImage.alt}
              </h3>
              <p className="text-gray-300 capitalize">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}