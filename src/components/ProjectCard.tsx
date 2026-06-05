'use client'
import Image from "next/image"
import React from "react"
import Badge from "./Badge"
import { motion } from "framer-motion"
import { fade } from "@/utils/motions"
import Button from "./ui/Button"

export type ProjectProps = {
  project: {
    title: string
    description: string
    techsUsed: string[]
    image: string
    liveUrl: string
    githubUrl: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <motion.article
     variants={fade( .6, .6)} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}} 
     className="max-w-md md:max-w-full mx-auto rounded-lg overflow-hidden px-4 pt-4 pb-6 bg-primary/5 border border-primary/10 backdrop-blur-md">
      <figure className="relative w-full h-60 overflow-hidden rounded-customRadius lg:rounded-lg group">
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-background/60 transition-all ease-in-out duration-200 z-10">
          <ul className="flex items-center justify-center h-full w-full gap-2">
            <li>
              <Button variant="primary" size="sm">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </Button>
            </li>

            <li>
              <Button variant="ghost" size="sm">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  View Code
                </a>
              </Button>
            </li>
          </ul>
        </div>
        <Image
          src={`/${project.image}`}
          alt={project.title}
          fill
          className="object-cover"
        />
      </figure>

      <div className="pt-6 lg:pt-12">
        <header>
          <h3 className="text-lg font-medium mb-2.5">{project.title}</h3>
        </header>

        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>


          
        <ul className="flex flex-wrap gap-2 justify-start items-start mt-7">
          {project.techsUsed.map((technology, index) => (
            <li key={index}>
              <Badge variant="accent">{technology}</Badge>
            </li>
          ))}
        </ul>

        {/* <footer className="pt-2">
          <ul className="flex items-center gap-2">
            <li className="relative group rounded-full">
              <Button variant="primary" size="sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </Button>
            </li>
            <li className="relative group rounded-full">
              <Button variant="ghost" size="sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"

                >
                  View Code
                </a>
              </Button>
            </li>
          </ul>
        </footer> */}
      </div>
      
    </motion.article>
  )
}
