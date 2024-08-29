"use client"
import Link from "next/link";
import { useEffect } from "react";
import $ from 'jquery';
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Navbar = () => {
   const { scroll } = useLocomotiveScroll();

   useEffect(() => {
      $("#myDIV").on('click', () => {
         $('#myMENU').toggleClass("mystyle");
      });
   }, []);

   return (
      <div
         data-scroll-section
         className="Navbar"
      >
         <div className="navigation-container row">
            <div className="col-lg-6 col-6 ">
               <div className="nav-left">
                  <Link href="/" className="name">Yunis Mikayilov</Link>
               </div>
            </div>
            <div className="col-lg-6 col-6 ">
               <div className="nav-right">
                  <a target="_blank" href="https://drive.google.com/file/d/1I_fc_EE6B43vckGk70bEUQcBfu6SIUDx/view"
                     className="about-link" style={{ paddingRight: "20px" }}> Résumé</a>
                  <a className="about-link nav-contact__btn" onClick={() => scroll.scrollTo("bottom", {
                     duration: 1,
                  })}> Contact</a>
                  <div className="menu-button">
                     <i id="myDIV" className="fa-solid fa-bars"></i>
                  </div>
               </div>
            </div>

         </div>
         <div id="myMENU" className="mobile-menu">
            <a target="_blank" href="https://drive.google.com/file/d/1I_fc_EE6B43vckGk70bEUQcBfu6SIUDx/view">Résumé</a>
            <a className="about-link nav-contact__btn" onClick={() => scroll.scrollTo("bottom", {
               duration: 1,
            })}> Contact</a>
         </div>
      </div>
   )
}

export default Navbar