'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface RetroCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const RetroCard: React.FC<RetroCardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      className={`retro-card ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.03, borderColor: '#FF10F0' } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

export default RetroCard
