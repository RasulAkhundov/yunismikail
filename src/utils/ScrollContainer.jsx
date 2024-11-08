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
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 3000)
   }, []);

   return (
      // <div>
      <LocomotiveScrollProvider
         options={{
            smooth: true,
            lerp: 0.075,
            direction: "vertical",
            smartphone: {
               smooth: false,
            },
            tablet: {
               smooth: false,
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
         <div data-scroll-container ref={containerRef}>
            <div className="Layout">
               {/* <Navbar /> */}
               <AnimatePresence mode="wait">
                  {loading ? <Loading /> : children}
               </AnimatePresence>
            </div>
         </div>
      </LocomotiveScrollProvider >

      // <Cursor />
      // </div>   
   );
};

export default ScrollContainer;