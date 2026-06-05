import React from "react";
import SocialMediaLinks from "../SocialMediaLinks";
import { FooterMyName } from "@/constant";

export default function Footer() {
  return (
    <footer 
      className="relative px-6 py-10 bg-background" 
      role="contentinfo"
      aria-label="Website footer"
    >
      <div className="wrapper md:flex gap-6 md:items-center md:justify-between">

        <h2 className='font-bold text-sm text-primary-foreground text-center md:text-left mb-4 md:mb-0'>Sezaru<span className='text-primary'>Dev</span></h2>

        <p className="text-muted-foreground text-sm text-center md:text-left mb-6 md:mb-0">
          © {new Date().getFullYear()} {FooterMyName}. All rights reserved.
        </p>

        <div className="flex justify-center">
          <SocialMediaLinks />
        </div>

      </div>
      
    </footer>
  );
}
