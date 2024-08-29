"use client"
import { useState, useEffect } from "react";
import Navbar from "@/layout/Navbar";
import { motion } from "framer-motion";
import { variants, pageTransition } from "@/constants/framerPageTransition";
import Contact from "@/layout/Contact";
import Image from "next/image";
import Pro1 from '/public/img/pro1.jpeg';
import Pro2 from '/public/img/pro2.jpeg';
import Pro3 from '/public/img/pro3.jpeg';
import Pro4 from '/public/img/pro4.jpeg';
import Pro5 from '/public/img/pro5.jpeg';
import Pro6 from '/public/img/pro6.jpeg';
import Pro7 from '/public/img/pro7.jpeg';
import Pro8 from '/public/img/pro8.jpeg';
// export const metadata = {
//    title: "Yunis Mikayilov — Project — Bufer",
//    description: "Hello! I'm Yunis. A product designer based in Warsaw",
// };

const Bufer = () => {

   return (
      <motion.div
         initial="initial"
         animate="in"
         exit="out"
         variants={variants}
         transition={pageTransition(0)}
      >
         <Navbar />
         <div id="projectPage" className="project__bufer" data-scroll-section>
            <div className="projectPage-container row">
               <div className="col-lg-12">
                  <div className="project-box">
                     <h1>Designing Bufer.az</h1>
                     <div className="project-title">Bufer.az is a platform for listing new and second hand car parts &
                        accessories, making it easy for buyers and sellers to connect.</div>
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
                           <Image src={Pro1} alt="" loading="lazy" className="work-image" />
                        </div>
                        <div className="text-title">Where did all this begin?</div>
                        <div className="text-body">As the number of car owners continues to rise, so does the demand for
                           car parts and accessories, both new and second-hand. In Azerbaijan, the automotive sector
                           has also been expanding, with approximately 1.5 million registered vehicles in the
                           country as of 2020. This growing market presents an opportunity for creating a localized
                           platform that connects car owners and companies, as well as individual sellers, in buying
                           and selling car parts and accessories.

                           I’m not really into cars, but it’s a great opportunity as a Product Designer to work on a
                           project that has a positive impact on the way people buy and sell things.</div>
                        <div className="text-title">The problem</div>
                        <div className="text-body">Despite the potential of this market, there is currently a lack of
                           user-friendly and trustworthy platforms that cater to the needs of car owners, businesses,
                           and individual sellers in Azerbaijan.</div>
                        <div className="text-title">
                           The challenge
                        </div>
                        <div className="text-body">
                           Creating a user-centric, trustworthy, and visually appealing platform for buying and selling
                           car parts and accessories in Azerbaijan, that offers unique functionalities.
                           <div style={{ padding: "10px 0px" }}> Here are my main goals:</div>
                           <ul>
                              <li>Create an aesthetically pleasing and easy-to-navigate interface that breaks the
                                 rules of boring marketplace.</li>
                              <li>Implement enhanced security measures, such as verification and secure messaging, to
                                 help users feel more confident when interacting with others on the platform.</li>
                              <li>Implement features that encourage users to return to the platform regularly, such as
                                 personalized notifications, or a wishlist feature.</li>
                           </ul>

                        </div>
                        <div className="text-title">
                           Onboarding & Home
                        </div>
                        <div className="text-body">
                           Making it easy for users to find what they need is a priority. On the Home screen, we offer
                           several ways to find listings  —  including by category, vehicle specifics, unique part
                           number, etc.
                           <div style={{ padding: "10px 0px" }}>More on next steps…</div>
                        </div>

                        <div className="work-image-block-hero">
                           <Image src={Pro2} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Searching by brand
                        </div>
                        <div className="text-body">
                           Our in-depth search functionality makes it easy to find the exact car parts and accessories
                           you need for your specific vehicle, by brand, model, year, and generation.
                        </div>




                        <div className="work-image-block-hero">
                           <Image src={Pro3} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Search Results
                        </div>
                        <div className="text-body">
                           Understanding that users may not be satisfied with their initial search results, we have
                           provided clear filtering options to help them narrow down their choices by item condition,
                           address, price, and more.
                        </div>


                        <div className="work-image-block-hero">
                           <Image src={Pro4} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Listing Screen
                        </div>
                        <div className="text-body">
                           Clear descriptions, image gallery, and a direct call button to make it easy to connect with
                           sellers.
                        </div>



                        <div className="work-image-block-hero">
                           <Image src={Pro5} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Seller Profile
                        </div>
                        <div className="text-body">
                           Individual Sellers and Stores  —  both are welcome.
                        </div>


                        <div className="work-image-block-hero">
                           <Image src={Pro6} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Personalized Experience
                        </div>
                        <div className="text-body">
                           Never miss a price drop or important update on your favorite listings  —  with instant
                           notifications.
                        </div>

                        <div className="work-image-block-hero">
                           <Image src={Pro7} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           Chatting Screen
                        </div>
                        <div className="text-body">
                           Use real time chatting experience to get more information about the item you’re interested
                           in.
                        </div>

                        <div className="work-image-block-hero">
                           <Image src={Pro8} alt="" className="work-image" />
                        </div>
                        <div className="text-title">
                           In the end…
                        </div>
                        <div className="text-body">
                           Bufer.az is a promising new platform that has the potential to revolutionize the way that
                           car parts and accessories are bought and sold. It was a great experience for me, and I’m
                           excited to see how it evolves in the future.
                           <div style={{ padding: "10px 0px" }}>
                              Don’t forget to check other cases from my portfolio. Thanks! ❤️
                           </div>
                        </div>

                     </div>
                  </div>
                  {/* <!-- <div className="project-bottom">
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
               </div> --> */}
               </div>
            </div>
         </div>
         <Contact />
      </motion.div>
   )
}

export default Bufer