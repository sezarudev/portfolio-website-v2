'use client'

import { AboutSectionText } from "@/constant"
import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/utils/motions"
import Badge from "../Badge"

export default function About() {
  return (
    <section id="about" className="wrapper py-20">
      {/* Intro */}
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8 mb-24"
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0, 0.6)}
          className="uppercase tracking-widest text-accent"
        >
          About
        </motion.h2>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-3xl lg:text-4xl font-semibold leading-snug"
        >
          {AboutSectionText.description}
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-14 lg:gap-0">
          <motion.div className="w-full lg:max-w-[45%]"
            variants={fadeIn("up", "tween", 0.2, 0.6)}
          >
            <p className="max-w-3xl text-base leading-relaxed">
              Hi, I&apos;m Cezar, a web developer who enjoys turning ideas into practical solutions. I build modern web applications with Next.js, React, Tailwind CSS, and TypeScript, while continuing to expand my 
              backend expertise. Every project is an opportunity to solve problems, improve my craft, and create something meaningful.
            </p>
          </motion.div>
          <motion.div className="space-y-8 w-fit lg:max-w-[45%]" variants={fadeIn("up", "tween", 0.2, 0.6)}>
            <article className="space-y-1">
              <h5 className="text-xs text-muted-foreground">Education</h5>
              <p className="text-sm text-accent">Bachelor of Science in Information Technology</p>
            </article>
            <article className="space-y-1">
              <h5 className="text-xs text-muted-foreground">Focus</h5>
              <p className="text-sm text-accent">Frontend Development</p>
            </article>
            <article className="space-y-1">
              <h5 className="text-xs text-muted-foreground">Core Skills</h5>
              <ul className="text-sm flex items-center gap-2 flex-wrap -ml-2.5">
                <li>
                  <Badge variant="accent">REACT</Badge>
                </li>
                <li>
                  <Badge variant="accent">NEXT</Badge>
                </li>
                <li>
                  <Badge variant="accent">TAILWINDCSS</Badge>
                </li>
              </ul>
            </article>
            <article className="space-y-1">
              <h5 className="text-xs text-muted-foreground">Learning</h5>
              <p className="text-sm text-accent">Backend Development</p>
            </article>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
