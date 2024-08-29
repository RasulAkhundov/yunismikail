"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PageTransitionWrapper = () => {
   return (
      <motion.div
         initial={{ background: 'rgba(0, 0, 0, 0)' }}
         animate={{ background: 'rgba(0, 0, 0, 0)' }}
         exit={{ background: 'rgba(0, 0, 0, .7)' }}
         transition={{ duration: .5, ease: 'easeOut' }}
         className="page-transition__wrapper">
         <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '100%' }}
            exit={{ y: '0' }}
            transition={{ duration: .5, ease: 'easeOut' }}
            className="inner__wrapper">
         </motion.div>
      </motion.div>
   )
}

export default PageTransitionWrapper