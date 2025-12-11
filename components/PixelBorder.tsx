import React from 'react'

interface PixelBorderProps {
  children: React.ReactNode
  className?: string
  color?: 'pink' | 'blue' | 'green'
}

const PixelBorder: React.FC<PixelBorderProps> = ({
  children,
  className = '',
  color = 'pink',
}) => {
  const colorClasses = {
    pink: 'border-retro-pink shadow-neon-pink',
    blue: 'border-neon-blue shadow-neon-blue',
    green: 'border-neon-green',
  }

  return (
    <div className={`pixel-border ${colorClasses[color]} ${className}`}>
      {children}
    </div>
  )
}

export default PixelBorder
