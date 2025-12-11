'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SocialLinkProps {
  name: string
  url: string
  icon?: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, url, icon = '🎮' }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="game-menu-item block text-center"
      whileHover={{ x: 10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <span className="inline-flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <span>{name}</span>
      </span>
    </motion.a>
  )
}

export default SocialLink
