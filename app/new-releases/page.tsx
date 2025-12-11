'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CyberButton from '@/components/CyberButton'
import CyberCard from '@/components/CyberCard'
import CyberPanel from '@/components/CyberPanel'

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
      <div className="container-cyber max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-pink" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white">
              New Releases
            </h1>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-pink" />
          </div>
          <p className="text-center text-gray-500 font-mono text-sm uppercase tracking-widest">
            Latest Drops
          </p>
        </motion.div>

        {/* Featured Release */}
        {newReleases.filter(r => r.featured).map((release) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <CyberPanel title="Featured Release">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Album Art Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-cyber-pink via-cyber-pink-dark to-neon-pink flex items-center justify-center overflow-hidden group">
                  <motion.div
                    className="text-9xl text-white/20 font-display font-bold"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    ◆
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Release Info */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/30 text-xs font-mono uppercase tracking-wider mb-4">
                      {release.type}
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-3">
                      {release.title}
                    </h2>
                    <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                      Released: {release.releaseDate}
                    </p>
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {release.description}
                  </p>
                  <div>
                    <CyberButton href={release.streamUrl}>
                      Stream Now
                    </CyberButton>
                  </div>
                </div>
              </div>
            </CyberPanel>
          </motion.div>
        ))}

        {/* Other Releases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8">
            Recent Releases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {newReleases.filter(r => !r.featured).map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              >
                <CyberCard>
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyber-pink-light to-cyber-pink-dark flex items-center justify-center text-4xl text-white/30 flex-shrink-0">
                      ◆
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="inline-block px-2 py-1 bg-cyber-pink/10 text-cyber-pink text-xs font-mono uppercase tracking-wider mb-2">
                        {release.type}
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-1 truncate">
                        {release.title}
                      </h3>
                      <p className="text-xs font-mono text-gray-500 mb-3">{release.releaseDate}</p>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {release.description}
                      </p>
                      <a
                        href={release.streamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyber-pink hover:text-cyber-pink-light transition-colors font-display"
                      >
                        Listen →
                      </a>
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="accent-line mb-8" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8">
            Coming Soon
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="cyber-border p-6 bg-cyber-gray-light/30 hover:bg-cyber-gray-light/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-2">{event.event}</h3>
                    <p className="text-sm text-gray-500 font-mono">{event.location}</p>
                  </div>
                  <div className="text-sm font-mono text-cyber-pink uppercase tracking-wider">
                    {event.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center text-xs font-mono text-gray-700 uppercase tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Stay tuned for announcements
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
