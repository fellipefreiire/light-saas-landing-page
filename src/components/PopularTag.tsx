'use client'

import { motion } from 'framer-motion'

export function PopularTag() {
  return (
    <motion.span
      animate={{
        backgroundPositionX: '-100%',
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
        duration: 1,
      }}
      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
    >
      Popular
    </motion.span>
  )
}
