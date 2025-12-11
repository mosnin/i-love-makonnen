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
      <div className="container-retro max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold neon-text mb-4">
            Album Select
          </h1>
          <p className="text-base sm:text-lg text-gray-400 uppercase tracking-wider">
            Choose Your Soundtrack
          </p>
        </motion.div>

        {/* Filter Menu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <div className="arcade-frame max-w-3xl mx-auto">
            <div className="arcade-frame-inner">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {filterOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => setFilter(option.value)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase tracking-wider text-sm sm:text-base
                      border-2 transition-all duration-200 ${
                      filter === option.value
                        ? 'bg-retro-pink text-white border-retro-pink shadow-neon-pink'
                        : 'bg-transparent text-retro-pink border-retro-pink hover:bg-retro-pink/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Albums Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredAlbums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
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
            <div className="text-6xl mb-4">🎮</div>
            <p className="text-xl text-gray-400">No albums found in this category</p>
          </motion.div>
        )}

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="arcade-frame max-w-2xl mx-auto">
            <div className="arcade-frame-inner p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-retro-pink mb-4 uppercase tracking-wider">
                🎧 Stream Everywhere
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                All albums available on Apple Music, Spotify, YouTube Music, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://music.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-retro-pink hover:text-retro-pink-light transition-colors underline"
                >
                  Apple Music
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-retro-pink hover:text-retro-pink-light transition-colors underline"
                >
                  Spotify
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://music.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-retro-pink hover:text-retro-pink-light transition-colors underline"
                >
                  YouTube Music
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
