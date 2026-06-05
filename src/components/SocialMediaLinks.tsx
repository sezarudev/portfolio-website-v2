import { Socials } from '@/constant'
import Link from 'next/link'
import React from 'react'

const SocialMediaLinks = () => {
  return (
    <nav aria-label="Social media">
      <ul className='flex items-center justify-center gap-6'>
        {Socials.map((item) => (

        <li key={item.name}>
          <Link 
            href={item.url} 
            target='_blank' 
            rel="noopener noreferrer" 
            aria-label={item.name}
            className='hover:text-primary transition-colors ease-in-out duration-150'>
            {item.logo}
          </Link>
        </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialMediaLinks