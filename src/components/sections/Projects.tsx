'use client'
import { projects, ProjectSectionText } from '@/constant'
import React from 'react'
import ProjectCard from '../ProjectCard'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motions'

export default function Projects() {
  return (
    <motion.section id='projects' className='relative w-full'>
      <div className="absolute top-[25vh] sm:top-[20vh] lg:top-[18vh] left-1/2 -translate-x-1/2 w-[80vw] sm:w-[60vw] lg:w-[70vw] rotate-12 blur-[120px] sm:blur-[160px] lg:blur-[220px]">
        <div className=" w-full h-[90px] sm:h-[130px] lg:h-[190px] bg-gradient-to-r from-primary/50 to-primary/20 [border-radius:50%/50%]"/>
      </div>
      <motion.div
        className='wrapper py-32'
        variants={staggerContainer(0.15, 0)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >

        <motion.div className='mb-24' variants={fadeIn("right", "spring", 0, 0.6)}>
          <h2 className='uppercase tracking-widest text-muted-foreground mb-4 text-sm'>{ProjectSectionText.heading}</h2>
          <p className='section-heading2'>
            {ProjectSectionText.description}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => {
              return (
                <ProjectCard key={index} project={project}/>
              )
            })
          }
        </div>
      </motion.div>



    </motion.section>
  )
}
