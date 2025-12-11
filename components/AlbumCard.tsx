'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CyberCard from './CyberCard'

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
      <CyberCard className="overflow-hidden group !p-0">
        {/* Album Cover Placeholder */}
        <div
          className="relative aspect-square bg-gradient-to-br from-cyber-pink to-cyber-pink-dark flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${coverColor} 0%, ${coverColor}CC 100%)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <motion.div
            className="text-8xl font-bold text-white/10 relative z-10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            ◆
          </motion.div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-20">
            {streamUrl && (
              <a
                href={streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-display text-sm font-bold uppercase tracking-wider hover:text-cyber-pink transition-colors border border-white/30 px-4 py-2 hover:border-cyber-pink"
                onClick={(e) => e.stopPropagation()}
              >
                ▶ Stream
              </a>
            )}
          </div>
        </div>

        {/* Album Info */}
        <div className="p-6 bg-cyber-gray-light/80 backdrop-blur-sm">
          <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyber-pink transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{year}</p>
        </div>
      </CyberCard>
    </motion.div>
  )
}

export default AlbumCard
