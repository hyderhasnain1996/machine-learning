'use client'

import Tilt from 'react-parallax-tilt'

/**
 * 3D tilt + glare wrapper for cards. Reacts to cursor position.
 */
export default function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1500}
      glareEnable
      glareMaxOpacity={0.18}
      glareColor="#67e8f9"
      glarePosition="all"
      glareBorderRadius="24px"
      className={className}
    >
      {children}
    </Tilt>
  )
}
