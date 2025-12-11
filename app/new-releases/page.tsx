'use client'

import React from 'react'
import { motion } from 'framer-motion'
import RetroButton from '@/components/RetroButton'
import RetroCard from '@/components/RetroCard'
import ArcadeFrame from '@/components/ArcadeFrame'

export default function NewReleases() {
  const newReleases = [
    {
      id: 1,
      title: 'Latest Single',
      type: 'Single',
      releaseDate: 'Dec 2024',
      description: 'Brand new track featuring cutting-edge production and signature Makonnen vibes.',
      streamUrl: 'https://music.apple.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Collaboration Drop',
      type: 'Feature',
      releaseDate: 'Nov 2024',
      description: 'Special collaboration with industry-leading artists. A must-listen.',
      streamUrl: 'https://spotify.com',
      featured: false,
    },
    {
      id: 3,
      title: 'Remix Package',
      type: 'Remix',
      releaseDate: 'Oct 2024',
      description: 'Official remixes from top producers reimagining fan-favorite tracks.',
      streamUrl: 'https://music.apple.com',
      featured: false,
    },
  ]

  const upcomingEvents = [
    { date: 'TBA', event: 'New Album Announcement', location: 'Worldwide' },
    { date: 'TBA', event: 'Tour Dates', location: 'Select Cities' },
    { date: 'TBA', event: 'Special Merch Drop', location: 'Online' },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container-retro max-w-6xl">
        {/* Header with Update Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-6xl sm:text-7xl mb-4"
          >
            ⚡
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold neon-text mb-4">
            New Updates
          </h1>
          <p className="text-base sm:text-lg text-gray-400 uppercase tracking-wider">
            Latest Drops & Upcoming Content
          </p>
        </motion.div>

        {/* Featured Release */}
        {newReleases.filter(r => r.featured).map((release, index) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <ArcadeFrame title="⭐ FEATURED UPDATE ⭐">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Album Art Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-retro-pink via-retro-pink-dark to-neon-pink flex items-center justify-center overflow-hidden group">
                  <motion.div
                    className="text-8xl sm:text-9xl"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    ⚡
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Release Info */}
                <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-retro-pink text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
                      {release.type}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                      {release.title}
                    </h2>
                    <p className="text-sm sm:text-base text-retro-pink-light uppercase tracking-wider">
                      Released: {release.releaseDate}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {release.description}
                  </p>
                  <div>
                    <RetroButton href={release.streamUrl} className="w-full sm:w-auto">
                      ▶ Stream Now
                    </RetroButton>
                  </div>
                </div>
              </div>
            </ArcadeFrame>
          </motion.div>
        ))}

        {/* Other Releases */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-retro-pink mb-6 uppercase tracking-wider text-center">
            Recent Releases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {newReleases.filter(r => !r.featured).map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              >
                <RetroCard>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-retro-pink-light to-retro-pink-dark flex items-center justify-center text-3xl sm:text-4xl flex-shrink-0">
                      🎵
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="inline-block px-2 py-1 bg-retro-pink/20 text-retro-pink text-xs font-bold uppercase tracking-wider mb-2">
                        {release.type}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">
                        {release.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2">{release.releaseDate}</p>
                      <p className="text-xs sm:text-sm text-gray-300 mb-3 line-clamp-2">
                        {release.description}
                      </p>
                      <a
                        href={release.streamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-retro-pink hover:text-retro-pink-light transition-colors font-bold uppercase tracking-wider"
                      >
                        Listen →
                      </a>
                    </div>
                  </div>
                </RetroCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <ArcadeFrame title="🔮 COMING SOON 🔮">
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-2 border-retro-pink/30 hover:border-retro-pink bg-arcade-gray/30 hover:bg-arcade-gray transition-all"
                >
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">{event.event}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{event.location}</p>
                  </div>
                  <div className="text-sm sm:text-base text-retro-pink font-bold uppercase tracking-wider">
                    {event.date}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 text-center text-xs sm:text-sm text-gray-500 uppercase tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡ Stay tuned for announcements ⚡
            </motion.div>
          </ArcadeFrame>
        </motion.div>
      </div>
    </div>
  )
}
