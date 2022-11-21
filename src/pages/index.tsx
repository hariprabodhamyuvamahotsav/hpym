import React, { useRef, useEffect } from "react";
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Head from 'next/head'
import { Loader } from '../components/loader';

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      scroll.on('scroll', () => {
        ScrollTrigger.update()
        ScrollTrigger.refresh()
      })
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
}

export default function Home() {
  const containerRef = useRef(null);
  useEffect(() => {
    const element = containerRef.current;
    gsap.to('body', {
      backgroundColor: '#f00',
      duration: 1,
      scrollTrigger: {
        trigger: '.intro',
        start: "top bottom",
        end: "top top",
        scrub: true,
        anticipatePin: 1,
        scroller: element,
      },
    });
  },[containerRef])
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>HariPrabodham Yuva Mahotsav 2023</title>
        <meta name="description" content="HariPrabodham Yuva Mahotsav 2023" />
        <link rel="icon" href="../resources/images/HPYM-2023-Logo.jpg" />
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          multiplier: 1,
          class: "is-reveal",
        }}
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <main data-scroll-container ref={containerRef}>
          <Loader />
          <section className="intro intro1" data-scroll-section>
            <h1>This is the Introduction section</h1>
          </section>
        </main>
      </LocomotiveScrollProvider>
    </>
  )
}
