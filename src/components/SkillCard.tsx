import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface SkillCardProps  {
name : string,
imgUrl: string
isCore: boolean
widthHeight: number
}
const SkillCard = ({name, imgUrl, isCore, widthHeight}:SkillCardProps) => {
  return (
    <motion.article whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }} className={`${isCore ? "bg-primary/5 border border-primary/20" : "bg-surface/40 border border-muted-foreground/15"} p-4 rounded-lg`}>
      <div className='grid grid-cols-1 justify-center items-center'>
        <figure className='flex flex-col items-center justify-center gap-4'>
          <div className='mx-auto'>
            <Image src={`/${imgUrl}`} alt={`${name} logo`}  width={widthHeight} height={widthHeight} className={["Next.js", "Github"].includes(name) ? "invert dark:invert-0" : ""} />
          </div>
          <figcaption  className='flex items-center justify-center'>
            <h3 className='text-xs md:text-sm'>{name}</h3>
          </figcaption>
        </figure>
      </div>
    </motion.article>
  )
}

export default SkillCard