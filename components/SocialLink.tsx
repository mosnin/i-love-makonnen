'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SocialLinkProps {
  name: string
  url: string
  icon?: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, url, icon = '◆' }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cyber-menu-item block group"
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <span className="inline-flex items-center gap-4">
        <span className="text-xl text-cyber-pink">{icon}</span>
        <span className="font-display">{name}</span>
      </span>
    </motion.a>
  )
}

export default SocialLink
