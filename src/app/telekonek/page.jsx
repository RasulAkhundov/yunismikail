"use client"
import { useState, useEffect } from "react";
import Navbar from "@/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { variants, pageTransition } from "@/constants/framerPageTransition";
import Contact from "@/layout/Contact";
import Image from "next/image";
import Tel1 from '/public/img/tel1.jpeg';
import Tel2 from '/public/img/tel2.jpeg';
import Tel3 from '/public/img/tel3.jpeg';
import Tel4 from '/public/img/tel4.jpeg';
import Tel5 from '/public/img/tel5.jpeg';
import Tel6 from '/public/img/tel6.jpeg';
import Tel7 from '/public/img/tel7.jpeg';
import Tel8 from '/public/img/tel8.jpeg';

// export const metadata = {
//    title: "Yunis Mikayilov — Project — Telekonek",
//    description: "Hello! I'm Yunis. A product designer based in Warsaw",
// };

const Telekonek = () => {
   const [isVisible, setIsVisible] = useState(true);
   const [delay, setDelay] = useState(window.localStorage.getItem('loading') === "true" ? 3 : 0);

   useEffect(() => {
      setDelay(0);
   }, [delay])

   return (
      <motion.div
         initial="initial"
         animate="in"
         exit="out"
         variants={variants}
         transition={pageTransition(delay)}
      >
         <Navbar />
         <div
            id="projectPage"
            className="project__telekonek"
            data-scroll-section
         >
            <div className="projectPage-container row">
               <div className="col-lg-12">
                  <div className="project-box">
                     <h1>Designing Telekonek</h1>
                     <div className="project-title">Telekonek is an eSIM app that revolutionizes mobile connectivity with its
                        seamless experience.</div>

                     {/* <!-- <div className="work-info">
                     <div className="info-box">
                        <div className="work-type">Role</div>
                        <div className="work-name">Lead Designer</div>
                     </div>
                     <div className="info-box">
                        <div className="work-type">Employer</div>
                        <div className="work-name">The Athletic</div>
                     </div>
                     <div className="info-box">
                        <div className="work-type">Platforms</div>
                        <div className="work-name">iOS, Android</div>
                     </div>
                     <div className="info-box">
                        <div className="work-type">Areas</div>
                        <div className="work-name">Strategy, Design</div>
                     </div>
                  </div> --> */}

                     <div className="project-text-area">
                        <div className="work-image-block-hero">
                           <Image src={Tel1} alt="" className="work-image" />
                        </div>
                        <div className="text-title">Where did all this begin?</div>
                        <div className="text-body">Physical SIM cards are becoming increasingly obsolete, giving way to
                           eSIMs. There are already millions of people around the world are now using eSIMs, enabling
                           them to travel and stay connected without having to worry about physical SIM.

                           <div style={{ padding: "10px 0px" }}>
                              There are several eSIM products on the market, offering various solutions for consumers.
                              However, the growing demand for eSIMs has also brought pain points such as a lack of
                              available options, complex interfaces, and limited capability to manage multiple eSIMs.
                           </div>

                           <div style={{ padding: '10px 0px' }}>
                              With Telekonek, we aim to provide better solutions to users.
                           </div>
                        </div>
                        <div className="text-title">The problem</div>
                        <div className="text-body">Current eSIM applications lack a seamless and intuitive user experience,
                           making it cumbersome for individuals to navigate through the complexities of eSIM
                           activation, management, and troubleshooting. There is a gap in the market for a
                           user-friendly and comprehensive eSIM app that caters to the diverse needs of consumers.

                        </div>
                        <div className="text-title">
                           The challenge
                        </div>
                        <div className="text-body">
                           The challenge encompasses the following goals:
                           <div style={{ padding: "10px 0px" }}> Here are my main goals:</div>
                           <ul>
                              <li>Create an aesthetically pleasing and intuitive interface that simplifies the eSIM
                                 activation process and provides users with a clear overview of their eSIM-related
                                 information.</li>
                              <li>Implement robust security measures, including user verification and secure
                                 communication channels, to instill confidence in users regarding the safety of their
                                 eSIM data and transactions.</li>
                              <li>Integrate features that encourage regular usage, such as personalized notifications,
                                 usage insights, and a user-friendly dashboard, to ensure Telekonek becomes an
                                 indispensable tool for managing eSIMs effectively.</li>
                              <li>
                                 Develop a user-friendly troubleshooting section that guides users through common
                                 eSIM issues and provides easy access to customer support, ensuring a smooth and
                                 stress-free experience.
                              </li>
                           </ul>

                        </div>
                        <div className="text-title">
                           Onboarding
                        </div>
                        <div className="text-body">
                           With a delightfully clean onboarding experience, we’re leading users effortlessly through
                           the initial steps of configuring their eSIMs.
                           <div style={{ padding: "10px 0px" }}>More on next steps…</div>
                        </div>

                        <div className="work-image-block-hero">
                           <Image src={Tel2} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Explore eSIMs
                        </div>
                        <div className="text-body">
                           From continents to countries, our comprehensive selection ensures your connectivity needs
                           are covered, offering a broad spectrum of eSIMs for diverse regions worldwide.
                        </div>

                        <div className="work-image-block-hero">
                           <Image src={Tel3} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Choose ideal package
                        </div>
                        <div className="text-body">
                           Explore packages designed to meet users’ specific communication needs, ensuring flexibility
                           and choice at their fingertips.
                        </div>


                        <div className="work-image-block-hero">
                           <Image src={Tel4} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Cart & Checkout
                        </div>
                        <div className="text-body">
                           Experience the ultimate in user-friendly checkout with Telekonek's simplified process. Plus,
                           for those traveling with companions, seize the convenience of purchasing multiple eSIMs
                           simultaneously.
                        </div>



                        <div className="work-image-block-hero">
                           <Image src={Tel5} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Installing eSIM
                        </div>
                        <div className="text-body">
                           Just scan the QR code or follow a few simple steps to activate the eSIM. We've curated a
                           list of compatible networks by country, ensuring users stay connected at all the time.
                        </div>


                        <div className="work-image-block-hero">
                           <Image src={Tel6} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Order History
                        </div>
                        <div className="text-body">
                           All of purchases are in one location. Check, activate, and modify eSIMs with just a couple of clicks.
                        </div>

                        <div className="work-image-block-hero">
                           <Image src={Tel7} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Dashboard
                        </div>
                        <div className="text-body">
                           Manage multiple eSIMs directly from Dashboard, providing not only a glimpse of current package status but also seamless control over entire eSIM portfolio.
                        </div>

                        <div className="work-image-block-hero">
                           <Image src={Tel8} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           In the end…
                        </div>
                        <div className="text-body">
                           Telekonek has the potential to redefine the landscape of mobile connectivity. My experience with it has been exceptional, and I'm excited to see where it goes.
                           <div style={{ padding: "10px 0px" }}>
                              Don’t forget to check other cases from my portfolio. Thanks! ❤️
                           </div>
                        </div>

                     </div>
                  </div>
                  {/* <div className="project-bottom">
                  <h1>Light Mode</h1>
                  <div className="project-title">Creating a brand new theme from the ground up for all mobile users of The Athletic — alongside a
                     system of colour mappings and guidelines internally for our product team.</div>
                  <div className="work-info">
                     <div className="info-box">
                        <div className="work-type">Role</div>
                        <div className="work-name">+6.2%</div>
                     </div>
                     <div className="info-box">
                        <div className="work-type">Employer</div>
                        <div className="work-name">+1.3%
                        </div>
                     </div>
                     <div className="info-box">
                        <div className="work-type">Platforms</div>
                        <div className="work-name">iOS, Android</div>
                     </div>
                  </div>
               </div> */}
               </div>
            </div>
         </div>
         <Contact />
      </motion.div>
   )
}

export default Telekonek