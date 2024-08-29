"use client"
import React, { useRef, useEffect, useState } from "react";
import Navbar from "@/layout/Navbar";
import Loading from "@/components/Loading/index";

// import Cursor from "../components/Cursor";
import {
   LocomotiveScrollProvider,
   useLocomotiveScroll
} from "react-locomotive-scroll";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useRouter, useParams } from "next/navigation";

const ScrollContainer = ({ children }) => {
   const containerRef = useRef(null);
   const params = useParams()
   const { scroll } = useLocomotiveScroll();

   return (
      // <div>
      <LocomotiveScrollProvider
         options={{
            smooth: true,
            lerp: 0.075,
            direction: "vertical",
            smartphone: {
               smooth: true,
               direction: "vertical",
               touchMultiplier: 1,
               multiplier: 2
            },
            tablet: {
               smooth: true,
               direction: "vertical",
               touchMultiplier: 1,
               multiplier: 2
            }
         }}
         watch={[params]}
         location={params}
         containerRef={containerRef}
         onLocationChange={(scroll) => {
            setTimeout(() => {
               scroll.scrollTo(0, { duration: 0, disableLerp: true });
            }, 550)
            // console.log("Location changed, scroll reset");
         }}
         onUpdate={() => {
            // console.log("Updated, but not on location change!")
         }}
      >
         <div data-scroll-container ref={containerRef} style={{ width: '100vw' }}>
            <div className="Layout">
               <Loading />
               {/* <Navbar /> */}
               <AnimatePresence mode="wait">
                  {children}
               </AnimatePresence>
            </div>
         </div>
      </LocomotiveScrollProvider >

      // <Cursor />
      // </div>   
   );
};

export default ScrollContainer;