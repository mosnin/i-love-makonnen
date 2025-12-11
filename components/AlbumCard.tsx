'use client'

import React from 'react'
import { motion } from 'framer-motion'
import RetroCard from './RetroCard'

interface AlbumCardProps {
  title: string
  year: string
  coverColor?: string
  streamUrl?: string
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  year,
  coverColor = '#FF1493',
  streamUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <RetroCard className="overflow-hidden group">
        {/* Album Cover Placeholder */}
        <div
          className="relative aspect-square bg-gradient-to-br from-retro-pink to-retro-pink-dark mb-4 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: coverColor }}
        >
          <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
          <div className="text-6xl font-bold text-white/20 group-hover:text-white/40 transition-all duration-300 group-hover:scale-110">
            ♪
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            {streamUrl && (
              <a
                href={streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-bold uppercase tracking-wider hover:text-neon-pink transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                ▶ Listen Now
              </a>
            )}
          </div>
        </div>

        {/* Album Info */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-retro-pink transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">{year}</p>
        </div>
      </RetroCard>
    </motion.div>
  )
}

export default AlbumCard
