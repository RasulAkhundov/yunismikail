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
import TLogo1 from '/public/img/testimonials-logo-1.png';
import Author1 from '/public/img/testimonials-author-1.jpeg';

const Home = () => {
  const { scroll } = useLocomotiveScroll();

  let testColumn1 = [
    {
      logo: '/img/testimonials-logo-delicut.png',
      desc: '“Yunis was a pleasure to work with, bringing both creativity and a deep understanding of user needs to the project. His designs were not only visually appealing but highly intuitive. I recommend Yunis to anyone in need of a skilled UI/UX designer!”',
      authorImg: '/img/testimonials-author-delicut.png',
      authorName: 'Janhar R.',
      authorJob: 'Delicut',
      linkedin: 'https://www.linkedin.com/in/rasulakhundov/',
      alt: 'Delicut'
    },
    {
      logo: '/img/testimonials-logo-startercode.png',
      width: 134,
      alt: 'Starter Code'
    },
    {
      logo: '/img/testimonials-logo-hyphen.png',
      desc: '“Yunis is a skilled UX/UI designer with a keen eye for user-centered, visually appealing designs. His process—rooted in research, testing, and feedback—consistently produces intuitive experiences. Collaborative and up-to-date with design trends, Yunis was invaluable to our projects. Highly recommended.”',
      authorImg: '/img/testimonials-author-hyphen.png',
      authorName: 'Erdal U.',
      authorJob: 'Hyphen Solutions',
      alt: 'Hyphen Solutions'
    }
  ]

  let testColumn2 = [
    {
      logo: '/img/testimonials-logo-telekonek.png',
      desc: '“Awesome to work with! communicates well with the tasks and very understanding on my requests! Will definitely work with Yunis on new projects!”',
      authorImg: '/img/testimonials-author-telekonek.png',
      authorName: 'Deo E.',
      authorJob: 'Telekonek',
      alt: 'Telekonek'
    },
    {
      logo: '/img/testimonials-logo-boundary.png',
      desc: '“Really strong visual design. Great at taking direction.”',
      authorImg: '/img/testimonials-author-boundary.png',
      authorName: 'Tyler L.',
      authorJob: 'Boundary Digital',
      linkedin: 'https://www.linkedin.com/in/tyler-leonard-boundary/',
      alt: 'Boundary Digital'
    },
    {
      logo: '/img/testimonials-logo-progmata.png',
      desc: '“Yunis was proactive, on time and up to the task. Delivered nice, modern design in accordance with brand details. Great work!”',
      authorImg: '/img/testimonials-author-progmata.png',
      authorName: 'Marko B.',
      authorJob: 'Progmata Technologies',
      linkedin: 'https://www.linkedin.com/in/bmmarko/',
      width: 115,
      alt: 'Progmata Technologies'
    }
  ]

  let testColumn3 = [
    {
      logo: '/img/testimonials-logo-atlas.png',
      desc: '"We hired Yunis to create an animated Product Demo of our mobile application. He was very collaborative and was willing to get started quickly. He listened and learned fast and delivered beyond our expectations using his own creative expression. I highly recommend working with Yunis."',
      authorImg: '/img/testimonials-author-atlas.png',
      authorName: 'Steven B.',
      authorJob: 'AtlasMate',
      linkedin: 'https://www.linkedin.com/in/stevenbelyanskiy/',
      width: 116,
      alt: 'AtlasMate'
    },
    {
      logo: '/img/testimonials-logo-signapse.png',
      alt: 'Signapse'
    },
    {
      logo: '/img/testimonials-logo-optionpulse.png',
      desc: '“Yunis is an exceptional designer. He was an integral part of the team, bringing a wealth of ideas on how to optimize the user experience. I would definitely work with him again.”',
      authorImg: '/img/testimonials-author-optionpulse.png',
      authorName: 'Ali K.',
      authorJob: 'OptionPulse',
      width: 134,
      alt: 'OptionPulse'
    }
  ]

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
              >Work with me</a>

              <div className="trusted__wrapper">
                <div className="image__block">
                  {/* <Image src={Bg1} alt="" />
                <Image src={Bg2} alt="" /> */}
                  <Image
                    src={Thrusted1}
                    alt="thrusted"
                    className="image-opacity-0"
                    onLoadingComplete={(image) => image.classList.remove('image-opacity-0')}
                  />
                  <Image
                    src={Thrusted2}
                    alt="thrusted"
                    className="image-opacity-0"
                    onLoadingComplete={(image) => image.classList.remove('image-opacity-0')}
                  />
                  <Image
                    src={Thrusted3}
                    alt="thrusted"
                    className="image-opacity-0"
                    onLoadingComplete={(image) => image.classList.remove('image-opacity-0')}
                  />
                </div>

                <span>Trusted by 30+ Companies</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="project" data-scroll-section>
        <div className="project-container row">
          <Link target="_blank" href="https://onveiv.com/" className="col-lg-6 project-div thin-div">
            <Image
              src={Bg3}
              alt="Onveiv"
              className="image-opacity-0"
              onLoadingComplete={(image) => image.classList.remove('image-opacity-0')}
            />
          </Link>
          <Link href="/telekonek" className="col-lg-6 project-div thin-div">
            <Image
              src={Bg1}
              alt="Telekonek"
              className="image-opacity-0"
              onLoadingComplete={(image) => image.classList.remove('image-opacity-0')}
            />
          </Link>
          <Link target="_black" href="https://www.figma.com/proto/yZT6qwcyMzSJjywTMvo1NO/Hauss-Showcase?page-id=123%3A729&node-id=3601-10048&node-type=canvas&viewport=1254%2C732%2C0.06&t=CU8y2XzLHn67aLcg-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3601%3A10048&share=1" className="col-lg-6 project-div wide-div">
            <Image
              src={Bg2}
              alt="hauss"
              className="image-opacity-0"
              onLoadingComplete={(image) => image.classList.remove('image-opacity-0')}
            />
          </Link>
          <Link target="_blank" href={'https://www.figma.com/proto/gjq6NQ7107qLnWE4jhLkZz/Triper-Showcase?page-id=1138%3A406&node-id=6201-15478&node-type=canvas&viewport=1431%2C-174%2C0.05&t=ZOHZFtYuLSg0s9Pv-1&scaling=min-zoom&content-scaling=fixed'} className="col-lg-6 project-div wide-div">
            <Image
              src={Bg4}
              alt="Triper"
              className="image-opacity-0"
              onLoadingComplete={(image) => image.classList.remove('image-opacity-0')}
            />
          </Link>
        </div>
      </div>

      <div className="testimonials__section page__container" data-scroll-section>

        <div className="page-container__inner">

          <div className="section-header__wrapper">
            <span>Testimonials</span>
            <h2>What Founders Say</h2>
          </div>

          <div className="testimonials-section__inner">

            <div className="single-testimonial__column">

              {
                testColumn1.map((t, i) => (
                  <div className="testimonial__card" key={i}>

                    {
                      t.authorName &&
                      <div className="author__wrapper">
                        <Image
                          src={t.authorImg}
                          width={40}
                          height={40}
                        />

                        <div className="author__info">
                          <h5>{t.authorName}</h5>
                          <span>{t.authorJob}</span>
                        </div>

                        {
                          t.linkedin &&
                          <a target="_blank" href={t.linkedin} className="linkedin"><i
                            className="fa-brands fa-linkedin-in"></i></a>
                        }
                      </div>
                    }

                    <div className="desc__wrapper">
                      {
                        t.desc &&
                        <p dangerouslySetInnerHTML={{ __html: t.desc }}></p>
                      }

                      <div className="logo__wrapper" style={{ width: t.width ? `${t.width}px` : '99px' }}>
                        <Image
                          src={t.logo}
                          width={100}
                          height={100}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="single-testimonial__column">
              {
                testColumn2.map((t, i) => (
                  <div className="testimonial__card" key={i}>

                    {
                      t.authorName &&
                      <div className="author__wrapper">
                        <Image
                          src={t.authorImg}
                          width={40}
                          height={40}
                        />

                        <div className="author__info">
                          <h5>{t.authorName}</h5>
                          <span>{t.authorJob}</span>
                        </div>

                        {
                          t.linkedin &&
                          <a target="_blank" href={t.linkedin} className="linkedin"><i
                            className="fa-brands fa-linkedin-in"></i></a>
                        }
                      </div>
                    }

                    <div className="desc__wrapper">
                      {
                        t.desc &&
                        <p dangerouslySetInnerHTML={{ __html: t.desc }}></p>
                      }

                      <div className="logo__wrapper" style={{ width: t.width ? `${t.width}px` : '99px' }}>
                        <Image
                          src={t.logo}
                          width={100}
                          height={100}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="single-testimonial__column">
              {
                testColumn3.map((t, i) => (
                  <div className="testimonial__card" key={i}>

                    {
                      t.authorName &&
                      <div className="author__wrapper">
                        <Image
                          src={t.authorImg}
                          width={40}
                          height={40}
                        />

                        <div className="author__info">
                          <h5>{t.authorName}</h5>
                          <span>{t.authorJob}</span>
                        </div>

                        {
                          t.linkedin &&
                          <a target="_blank" href={t.linkedin} className="linkedin"><i
                            className="fa-brands fa-linkedin-in"></i></a>
                        }
                      </div>
                    }

                    <div className="desc__wrapper">
                      {
                        t.desc &&
                        <p dangerouslySetInnerHTML={{ __html: t.desc }}></p>
                      }

                      <div className="logo__wrapper" style={{ width: t.width ? `${t.width}px` : '99px' }}>
                        <Image
                          src={t.logo}
                          width={100}
                          height={100}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </motion.div>
  );
}

export default Home