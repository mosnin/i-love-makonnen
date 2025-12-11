'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CyberCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      className={`cyber-card ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.div>
  )
}

export default CyberCard
