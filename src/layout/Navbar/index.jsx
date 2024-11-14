"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import $ from 'jquery';
import Image from "next/image";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import PersonMe from '/public/img/navbar-person-img.jpeg';

const Navbar = () => {
   const [navMenu, setNavMenu] = useState(null);
   const { scroll } = useLocomotiveScroll();

   console.log(scroll)

   const setOverflowFunc = () => {
      if (window.innerWidth <= 1024) {
         if (navMenu) {
            $('body, html').addClass('overflow-y-hidden');
         } else {
            $('body, html').removeClass('overflow-y-hidden');
         }
      } else {
         $('body, html').removeClass('overflow-y-hidden');
      }
      if(navMenu) {
         scroll.stop();
      } else {
         scroll.start();
      }
   }
   setOverflowFunc();

   useEffect(() => {
      $(window).on('resize', () => {
         setOverflowFunc();
      });
   }, [])

   return (
      <div
         data-scroll-section
         className="Navbar"
      >
         <div className="navigation-container row">
            <div className="col-lg-6 col-6 d-flex align-items-center">
               <div className="nav-left">
                  <Link href="/" className="name">Yunis Mikayilov</Link>
               </div>
            </div>
            <div className="col-lg-6 col-6 d-flex align-items-center justify-content-end">
               <div className="nav-right">

                  <a target="_blank" href="https://drive.google.com/file/d/1I_fc_EE6B43vckGk70bEUQcBfu6SIUDx/view"
                     className="navbar-link">Résumé</a>
                  <Link href="/design-shots" className="navbar-link">Recent Work</Link>

                  <div className="open-for-work__wrapper">
                     <div className="image__block">
                        <Image
                           src={PersonMe}
                           width={100}
                           height={100}
                           alt="Yunis Mikayilov"
                           className="image-opacity-0"
                           onLoadingComplete={(image) => image.classList.remove('image-opacity-0')}
                        />
                        <div className="online__icon"></div>
                     </div>

                     <div className="popup__block">
                        <span>Open for work</span>
                     </div>
                  </div>

                  <div className="navbar-button-cover"
                     onClick={() => {
                        scroll.scrollTo("bottom", {
                           duration: .5,
                        });
                     }
                     }>
                     <span className="navbar-link navbar-link-button nav-contact__btn">Work with me</span>
                     <span className="navbar-link navbar-link-button nav-contact__btn">Let's talk</span>
                  </div>

                  <div className={`menu-button ${navMenu === true ? 'show' : navMenu === false ? 'hide' : ''}`} onClick={() => navMenu ? setNavMenu(false) : setNavMenu(true)}>
                     <div className="line line-1"></div>
                     <div className="line line-2"></div>
                  </div>
               </div>
            </div>

         </div>
         <div className={`mobile-menu ${navMenu === true ? 'show' : navMenu === false ? 'hide' : ''}`}>
            <div className="menu-links__wrapper">
               <div className="menu__items">
                  <a target="_blank" href="https://drive.google.com/file/d/1I_fc_EE6B43vckGk70bEUQcBfu6SIUDx/view">Résumé</a>
               </div>
               <div className="menu__items">
                  <Link href="/design-shots" className="navbar-link">Recent Work</Link>
               </div>
               {/* <a className="navbar-link nav-contact__btn"
                  onClick={() => {
                     scroll.scrollTo("bottom", {
                        duration: .5,
                     });
                     setNavMenu(false)
                  }
                  }> Contact</a> */}
            </div>

            <div className="menu__buttons">
               <a href="mailto:yunismikail@gmail.com" className="animated-button__cover c-button">
                  <span className="animated-button__text">Contact via Email</span>
                  <span className="animated-button__text">Let's talk</span>
               </a>
            </div>
         </div>
      </div>
   )
}

export default Navbar