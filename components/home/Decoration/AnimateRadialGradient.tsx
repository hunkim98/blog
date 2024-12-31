import React, { useEffect, useState } from 'react'
import { Transition } from '@mantine/core'
import { motion } from 'framer-motion'

interface AnimateRadialGradientProps {}

const AnimateRadialGradient: React.FC<AnimateRadialGradientProps> = () => {
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 })

  // useEffect(() => {
  //   // move the radial gradient to the center of the screen by delta
  //   const moveDelta = () => {
  //     const delta = 20
  //     setCenterPosition((prev) => {
  //       if (prev.x + delta > window.innerWidth || prev.y + delta > window.innerHeight) {
  //         return { x: 0, y: 0 }
  //       }
  //       return {
  //         x: prev.x + delta,
  //         y: 0,
  //       }
  //     })
  //   }
  //   setInterval(moveDelta, 100)
  // }, [])
  // if (typeof window === 'undefined') {
  //   return null
  // }
  return (
    <>
      <motion.div
        //   bg={'red'}
        //   h={800}
        className="-z-10"
        style={{
          opacity: 0.6,
          zIndex: -1,
          position: 'absolute',
          background: 'radial-gradient(rgba(0,0,0,1), rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)',
          top: centerPosition.y,
          left: centerPosition.x,
          transform: 'translate(-50%, -50%)',
          width: 1000,
          height: 1000,
        }}
      ></motion.div>
      <motion.div
        //   h={800}
        className="-z-10"
        style={{
          opacity: 0.6,
          // backgroundColor: 'red',
          zIndex: -1,
          position: 'absolute',
          background: 'radial-gradient(rgba(0,0,0,1), rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)',
          top: centerPosition.y,
          right: centerPosition.x,
          transform: 'translate(50%, -50%)',
          width: 1000,
          height: 1000,
        }}
      ></motion.div>
    </>
  )
}

export default AnimateRadialGradient
