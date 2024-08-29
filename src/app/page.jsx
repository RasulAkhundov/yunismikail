"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/layout/Navbar";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { variants, pageTransition } from "@/constants/framerPageTransition";
import Contact from "@/layout/Contact";
import Image from "next/image";
import Thrusted1 from '/public/img/thrusted1.png';
import Thrusted2 from '/public/img/thrusted2.png';
import Thrusted3 from '/public/img/thrusted3.png';
import Bg1 from '/public/img/bg1.png';
import Bg2 from '/public/img/bg2.png';
import Bg3 from '/public/img/bg3.png';
import Bg4 from '/public/img/bg4.png';

const Home = () => {
  const { scroll } = useLocomotiveScroll();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={pageTransition(0)}
    >
      {/* <h2>her sehife ucun ayri description</h2> */}
      <Navbar />
      <header data-scroll-section>
        <div className="header-area row">
          <div className="col-lg-12">

            <h1 className="hello-text">Hello! I'm Yunis. <br />
              A product designer based in Warsaw
            </h1>

            <p className="paragraph-info">
              Sr. Product Designer at <a target="_blank" style={{ fontFamily: 'Gilroy-Semibold' }}
                href="https://www.linkedin.com/company/customerly">Customerly </a>
              <br />
              Previously at <a target="_blank" style={{ fontFamily: 'Gilroy-Semibold' }} href="https://onveiv.com/">
                Onveiv
              </a>, <a target="_blank" style={{ fontFamily: 'Gilroy-Semibold' }} href="https://sg.linkedin.com/company/tripkliq">
                Tripkliq
              </a>
            </p>
            <div className="button__wrapper">
              <a target="_blank" className="resume-button nav-contact__btn"
                onClick={() => scroll.scrollTo("bottom", {
                  duration: 1,
                })}
              >Get in Touch</a>

              <div className="trusted__wrapper">
                <div className="image__block">
                  {/* <Image src={Bg1} alt="" />
                <Image src={Bg2} alt="" /> */}
                  <Image src={Thrusted1} alt="" />
                  <Image src={Thrusted2} alt="" />
                  <Image src={Thrusted3} alt="" />
                </div>

                <span>Trusted by 30+ Companies</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="project" data-scroll-section>
        <div className="project-container row">
          <Link href="/telekonek" className="col-lg-6 project-div thin-div">
            <Image src={Bg1} alt="" />
          </Link>
          <Link href="/bufer" className="col-lg-6 project-div wide-div">
            <Image src={Bg2} alt="" />
          </Link>
          <a target="_blank" href="https://onveiv.com/" className="col-lg-6 project-div thin-div">
            <Image src={Bg3} alt="" />
          </a>
          <div className="col-lg-6 project-div wide-div">
            <Image src={Bg4} alt="" />
          </div>
        </div>
      </div>

      <Contact />
    </motion.div>
  );
}

export default Home