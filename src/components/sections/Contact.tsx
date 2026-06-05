'use client'

import React from 'react'
import { ContactSectionText, emailLink } from '@/constant'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '@/utils/motions'
import Link from 'next/link'
import Button from '../ui/Button'

export default function Contact() {
  return (
    <motion.section
      id="contact"
       className="relative w-full overflow-hidden group"
    >
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:group-hover:bottom-[6%] lg:group-hover:bottom-[10%]
 transition-all duration-300 ease-in-out">
          <div className="relative w-[70vw] sm:w-[60vw] lg:w-[50vw]">

            {/* Glow layer 1 (core glow) */}
            <div
              className="
                absolute top-0 left-1/2 -translate-x-1/2
                w-full h-[120px] sm:h-[160px] lg:h-[180px]
                bg-primary/30
                blur-2xl sm:blur-3xl lg:blur-[80px]
                [border-radius:50%/60%]
              "
            />

            {/* Glow layer 2 (outer spread) */}
            <div
              className="
                absolute top-0 left-1/2 -translate-x-1/2
                w-full h-[140px] sm:h-[220px] lg:h-[289px]
                bg-primary/15
                blur-xl sm:blur-[120px] lg:blur-[212px]
                [border-radius:50%/60%]
              "
            />
          </div>
        </div>
      <motion.div
      className="wrapper py-24"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      >

      {/* Heading */}
      <motion.div
        variants={fadeIn("up", "tween", 0, 0.6)}
        className="mb-12 text-center"
      >
        <h2 className="text-accent mb-4 tracking-widest uppercase">
          {ContactSectionText.heading}
        </h2>
        <p className="text-3xl lg:text-4xl font-medium max-w-xl mx-auto">
          {ContactSectionText.subheading}
        </p>
      </motion.div>

      {/* Description */}
      <motion.div
        variants={fadeIn("up", "tween", 0.1, 0.6)}
        className="text-center mb-10"
      >
        <p className=" lg:w-5/12 mx-auto leading-relaxed font-light text-muted-foreground">
          {ContactSectionText.description}
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.6)}
        className="mt-12 text-center"
      >
        <Button asChild>
          <Link
            href={`mailto:${emailLink}`}
            target='_blank'
            rel="noopener noreferrer" 
          >
            Let’s Connect
          </Link>
        </Button>
      </motion.div>

      </motion.div>

    </motion.section>
  )
}
