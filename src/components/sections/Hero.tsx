'use client'

import React from 'react'
import { heroSectionData } from '@/constant'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, fade } from '@/utils/motions'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative">

      {/* Background Blob */}
      <div
        className="
          absolute
          left-1/2
          top-[90vh]
          -translate-x-1/2
          rounded-full
          blur-[120px]
          lg:blur-[160px]
          [background:radial-gradient(circle_at_center,hsl(var(--blob)/0.6),hsl(var(--blob)/0))]
          w-[90vw] h-[25vh]
          sm:w-[80vw] sm:h-[28vh]
          md:w-[70vw] md:h-[30vh]
          lg:w-[60vw] lg:h-[32vh]
          min-w-[320px] min-h-[180px]
        "
      />

      {/* Animated Content */}
      <motion.div
        variants={staggerContainer(0.15, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-screen grid place-items-center py-4 relative z-20"
      >
        <motion.div
          variants={fade(0.6, 0)}
          className="text-center px-4 max-w-2xl lg:max-w-4xl"
        >
          <motion.h1
            variants={fadeIn("up", "spring", 0.1, 0.8)}
            className="text-primary-foreground font-bold text-4xl md:text-5xl lg:text-6xl leading-snug"
          >
            {heroSectionData.heading}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fade(0.6, 0.3)}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            {heroSectionData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fade(0.6, 0.5)}
            className="flex flex-wrap gap-4 items-center justify-center mt-10"
          >

            <motion.div
              variants={fadeIn("up", "tween", 0, 0.6)}
            >
              <Button asChild variant='primary' size='lg'>
                <a href="#projects">Explore Projects</a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0, 0.6)}
            >
              <Button asChild variant='secondary' size='lg'>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
