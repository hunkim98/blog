import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimateRadialGradientProps {}

const AnimateRadialGradient: React.FC<AnimateRadialGradientProps> = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      //   setMousePosition({ x: e.clientX, y: e.clientY })
      // set mouse position when mouse has stopped moving
      const error = 100
      const x = e.clientX
      const y = e.clientY
      const lastX = mousePosition.x
      const lastY = mousePosition.y
      //   if (Math.abs(x - lastX) > error || Math.abs(y - lastY) > error) {
      //     setMousePosition({ x: e.clientX, y: e.clientY })
      //   }
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  return (
    <motion.div
      //   bg={'red'}
      //   h={800}
      style={{
        opacity: 0.6,
        zIndex: -1,
        position: 'absolute',
        background: 'radial-gradient(rgba(0,0,0,1), rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)',
        top: mousePosition.y,
        left: mousePosition.x,
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 500,
      }}
    ></motion.div>
  )
}

export default AnimateRadialGradient
