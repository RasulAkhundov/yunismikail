"use client"

import React, { useLayoutEffect } from 'react';
import { variants, pageTransition } from "@/constants/framerPageTransition";
import { motion } from "framer-motion";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "@/layout/Navbar";
import Image from "next/image";
import Shot1 from '/public/img/design-shot-1.png';
import Shot2 from '/public/img/design-shot-2.png';
import Shot3 from '/public/img/design-shot-3.png';
import Shot4 from '/public/img/design-shot-4.png';
import Shot5 from '/public/img/design-shot-5.png';
import Shot6 from '/public/img/design-shot-6.png';
import Shot7 from '/public/img/design-shot-7.png';
import Shot8 from '/public/img/design-shot-8.png';
import Shot9 from '/public/img/design-shot-9.png';
import Shot10 from '/public/img/design-shot-10.png';
import Shot11 from '/public/img/design-shot-11.png';
import Shot12 from '/public/img/design-shot-12.png';
import Shot13 from '/public/img/design-shot-13.png';
import Contact from '@/layout/Contact';


const DesignShots = () => {
   gsap.registerPlugin(ScrollTrigger);

   // useLayoutEffect(() => {
   //    let designShots = gsap.utils.toArray('.digital-shot-image');

   //    designShots.forEach((element) => {
   //       console.log(element);
   //       gsap.from(element, {
   //          scrollTrigger: {
   //             trigger: element,
   //             scrub: true,
   //             start: '-15% 70%',
   //             end: '60% 70%',
   //             markers: true
   //          },
   //          stagger: 0.35,
   //          duration: 0.9,
   //          opacity: 0,
   //          // x: '-100px',
   //          autoAlpha: 0,
   //       })
   //    })
   // }, []);


   return (
      <motion.div
         initial="initial"
         animate="in"
         exit="out"
         variants={variants}
         transition={pageTransition(0)}
      >
         <Navbar />

         <div className="design-shots__container page__container" data-scroll-section>

            <div className="section-header__wrapper">
               <span>project shots</span>
               <h2>Our recent work</h2>
            </div>

            <div className="page-container__inner">

               <div className="single-image__wrapper">
                  <Image src={Shot1} alt="design shot 1" loading="lazy" className="digital-shot-image" />
               </div>

               <div className="multiple-image__wrapper">
                  <Image src={Shot2} alt="design shot 2" loading="lazy" className="digital-shot-image" />
                  <Image src={Shot3} alt="design shot 3" loading="lazy" className="digital-shot-image" />
               </div>

               <div className="single-image__wrapper">
                  <Image src={Shot4} alt="design shot 4" loading="lazy" className="digital-shot-image" />
               </div>

               <div className="multiple-image__wrapper">
                  <Image src={Shot5} alt="design shot 5" loading="lazy" className="digital-shot-image" />
                  <Image src={Shot6} alt="design shot 6" loading="lazy" className="digital-shot-image" />
               </div>

               <div className="single-image__wrapper">
                  <Image src={Shot7} alt="design shot 7" loading="lazy" className="digital-shot-image" />
               </div>

               <div className="multiple-image__wrapper">
                  <Image src={Shot8} alt="design shot 8" loading="lazy" className="digital-shot-image" />
                  <Image src={Shot9} alt="design shot 9" loading="lazy" className="digital-shot-image" />
               </div>

               <div className="single-image__wrapper">
                  <Image src={Shot10} alt="design shot 10" loading="lazy" className="digital-shot-image" />
               </div>

               <div className="multiple-image__wrapper">
                  <Image src={Shot11} alt="design shot 11" loading="lazy" className="digital-shot-image" />
                  <Image src={Shot12} alt="design shot 12" loading="lazy" className="digital-shot-image" />
               </div>

               <div className="single-image__wrapper">
                  <Image src={Shot13} alt="design shot 13" loading="lazy" className="digital-shot-image" />
               </div>
            </div>
         </div>

         <Contact />
      </motion.div>
   )
}

export default DesignShots