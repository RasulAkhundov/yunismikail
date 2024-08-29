"use client"
import { useEffect, useState, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

window?.localStorage.setItem('loading', true);

const Loading = ({ active = true }) => {
   const { scroll } = useLocomotiveScroll();
   const [loadingPercentage, setLoadingPercentage] = useState(0);
   const intervalRef = useRef(null);

   useEffect(() => {

      const loadingTimer = setTimeout(() => {
         window.localStorage.setItem('loading', false);
      }, 3000); // Loading completes after 3 seconds

      return () => clearTimeout(loadingTimer);
   }, [])

   useGSAP(() => {
      let tl = gsap.timeline();
      const body = document.body;

      tl.to('.loader__percentage', {
         delay: 2,
         autoAlpha: 0,
         duration: 0.5,
      });

      tl.to('.loading__wrapper', {
         delay: 0.5,
         duration: 0,
         opacity: '0',
         pointerEvents: 'none',
         ease: 'back.out',
      });

      tl.add(() => {
         body.classList.remove('overflow-hidden');
      });
   });

   useEffect(() => {
      if (scroll) {
         scroll.stop();
      }
      setTimeout(() => {
         if (scroll) {
            scroll.start();
         }
         window.localStorage.setItem('loading', false);
      }, 3000)
   }, [scroll]);

   useEffect(() => {
      const body = document.body;

      if (active && intervalRef.current === null) {
         body.classList.add('overflow-hidden');
         intervalRef.current = setInterval(() => {
            setLoadingPercentage((prev) => {
               if (prev < 100) {
                  return prev + 1;
               } else {
                  if (intervalRef.current) {
                     clearInterval(intervalRef.current); // Clear interval when loading is complete
                     intervalRef.current = null;
                  }
                  return prev;
               }
            });
         }, 15);
      }

      if (!active) {
         body.classList.remove('overflow-hidden');
      }
   }, [active]);

   return (
      <div className="loading__wrapper">
         <h2 className="loader__percentage">{`${loadingPercentage < 100 ? (loadingPercentage === 0 ? '000' : '0' + loadingPercentage) : 100}`}%</h2>
      </div>
   )
}

export default Loading