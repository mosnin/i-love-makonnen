'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AlbumCard from '@/components/AlbumCard'

export default function Albums() {
  const [filter, setFilter] = useState('all')

  const albums = [
    {
      id: 1,
      title: 'iLoveMakonnen',
      year: '2014',
      type: 'EP',
      coverColor: '#FF1493',
      streamUrl: 'https://music.apple.com',
    },
    {
      id: 2,
      title: 'Drink More Water 5',
      year: '2015',
      type: 'Mixtape',
      coverColor: '#C71585',
      streamUrl: 'https://spotify.com',
    },
    {
      id: 3,
      title: 'iLoveMakonnen 2',
      year: '2016',
      type: 'EP',
      coverColor: '#FF69B4',
      streamUrl: 'https://music.apple.com',
    },
    {
      id: 4,
      title: 'Red Dragon',
      year: '2017',
      type: 'Album',
      coverColor: '#DB7093',
      streamUrl: 'https://spotify.com',
    },
    {
      id: 5,
      title: 'Legendary',
      year: '2019',
      type: 'Album',
      coverColor: '#FF1493',
      streamUrl: 'https://music.apple.com',
    },
    {
      id: 6,
      title: 'My Parade',
      year: '2020',
      type: 'Album',
      coverColor: '#C71585',
      streamUrl: 'https://spotify.com',
    },
  ]

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Albums', value: 'Album' },
    { label: 'EPs', value: 'EP' },
    { label: 'Mixtapes', value: 'Mixtape' },
  ]

  const filteredAlbums = filter === 'all'
    ? albums
    : albums.filter(album => album.type === filter)

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container-cyber max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-pink" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white">
              Albums
            </h1>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-pink" />
          </div>
          <p className="text-center text-gray-500 font-mono text-sm uppercase tracking-widest">
            Discography
          </p>
        </motion.div>

        {/* Filter Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-3 font-display font-semibold uppercase tracking-wider text-sm
                  transition-all duration-300 border
                  ${filter === option.value
                    ? 'bg-cyber-pink/20 text-white border-cyber-pink shadow-neon-pink'
                    : 'bg-transparent text-gray-400 border-cyber-pink/30 hover:bg-cyber-pink/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Albums Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredAlbums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <AlbumCard
                title={album.title}
                year={album.year}
                coverColor={album.coverColor}
                streamUrl={album.streamUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAlbums.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4 text-cyber-pink/30">◆</div>
            <p className="text-xl text-gray-500 font-display">No albums found</p>
          </motion.div>
        )}

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="accent-line mb-8" />
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
            Available Everywhere
          </h3>
          <p className="text-sm text-gray-500 mb-6 font-mono">
            Stream on all major platforms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyber-pink hover:text-cyber-pink-light transition-colors font-display"
            >
              Apple Music
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyber-pink hover:text-cyber-pink-light transition-colors font-display"
            >
              Spotify
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://music.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyber-pink hover:text-cyber-pink-light transition-colors font-display"
            >
              YouTube Music
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
