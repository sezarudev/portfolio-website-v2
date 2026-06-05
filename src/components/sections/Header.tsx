'use client'
import React from 'react'
import { HiX, HiMenu } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from '@/constant';
import { fade, mobileMenu, mobileMenuLink } from '@/utils/motions';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import Button from '../ui/Button';

const Header = () => {
  const { isOpen, toggleMenu, closeMenuByNavlist } = useMobileMenu()

const HomeHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  closeMenuByNavlist()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

  return (
    <motion.header
      variants={fade(0.6, 0)}
      initial="hidden"
      animate="show"
      className='fixed top-0 left-0 right-0 z-50 w-full bg-background/60 backdrop-blur-lg'>
      <div className='relative wrapper py-4 flex items-center justify-between z-40'>

        <a href={`/`} className='flex items-center gap-3' onClick={HomeHandler}>
          <h2 className='font-bold text-lg text-primary-foreground'>Sezaru<span className='text-primary'>Dev</span></h2>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => {
                  const isCTA = link.id === "cta_contact"

                  return (
                    <motion.li
                      key={link.title}
                      variants={mobileMenuLink}
                      className="flex items-center justify-center"
                    >
                      {isCTA ? (
                        <Button asChild>
                          <a href={link.url} onClick={closeMenuByNavlist}>
                            {link.title}
                          </a>
                        </Button>
                      ) : (
                        <a
                          href={link.url}
                          onClick={closeMenuByNavlist}
                          className="nav_item"
                        >
                          {link.title}
                        </a>
                      )}
                    </motion.li>
                  )
                })}
          </ul>
        </nav>



        <button className='md:hidden' onClick={toggleMenu}>
            {
              isOpen? <HiX size={32}/> : <HiMenu  size={32}/> 
            }
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="top-0 absolute left-0 right-0 h-screen bg-background flex flex-col items-center"
          >
            <nav className="mx-auto px-5 w-full h-full flex">
              <ul className=" flex flex-col items-center justify-center space-y-6 w-full text-lg">
                {navLinks.map((link) => {
                  const isCTA = link.id === "cta_contact"

                  return (
                    <motion.li
                      key={link.title}
                      variants={mobileMenuLink}
                      className="flex items-center justify-center"
                    >
                      {isCTA ? (
                        <Button asChild>
                          <a href={link.url} onClick={closeMenuByNavlist}>
                            {link.title}
                          </a>
                        </Button>
                      ) : (
                        <a
                          href={link.url}
                          onClick={closeMenuByNavlist}
                          className="nav_item"
                        >
                          {link.title}
                        </a>
                      )}
                    </motion.li>
                  )
                })}
              </ul>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  )
}

export default Header