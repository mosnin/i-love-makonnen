import React from 'react'

interface ArcadeFrameProps {
  children: React.ReactNode
  className?: string
  title?: string
}

const ArcadeFrame: React.FC<ArcadeFrameProps> = ({
  children,
  className = '',
  title,
}) => {
  return (
    <div className={`arcade-frame ${className}`}>
      {title && (
        <div className="bg-retro-pink text-white text-center py-2 px-4 font-bold uppercase tracking-wider border-b-2 border-retro-pink-light">
          {title}
        </div>
      )}
      <div className="arcade-frame-inner">
        {children}
      </div>
    </div>
  )
}

export default ArcadeFrame
