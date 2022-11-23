import React, { FC, useRef, useEffect } from "react";
import style from './about.module.scss';
import { getExtraClasses } from '../../utils/common.util';
import cn from 'classnames'
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
// import pjdas from '../../resources/images/pjdas_main.png';

import swamiji from './images/5.png';
import apsmym from './images/smym.png';

export const About: FC<{ className?: string }> = ({ className }) => {
  const extraClasses = getExtraClasses(style, className);

  const el = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (el.current) {

      gsap.set('.about_Content *', { y: 30, autoAlpha: 0 })

      let aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about_Content',
          start: "top bottom",
          // end: "bottom center",
          // scrub: true,
          // toggleActions: "play none none play",
        }
      })
      .to('.about_Content *', {
        duration: 2,
        y: 0,
        ease: 'expo.out',
        stagger: {amount: 0.8},
        clearProps: true,
      })
      .to('.about_Content *', {
        duration: 3,
        ease: 'power4.out',
        autoAlpha: 1,
        stagger: {amount: 0.8},
        clearProps: true,
      }, 0)

      ScrollTrigger.create({
        trigger: '.about_Image_Contain',
        start: "top bottom",
        toggleClass: style.active,
      });


      return () => {
        if (aboutTl) {
          aboutTl.kill();
          ScrollTrigger.getAll().forEach(e => e.kill());
        }
      };
    }

  }, [el]);
  return (
    <section ref={el} className={cn(style.about_Section, extraClasses, 'about_Section')}>
      <div className={cn(style.about_Content, 'about_Content')}>
        <h2 className={style.about_Title}>About</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt obcaecati ullam omnis excepturi similique harum sit non provident cum doloribus sequi laudantium eum, totam earum commodi corrupti eaque? Quis, soluta.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt obcaecati ullam omnis excepturi similique harum sit non provident cum doloribus sequi laudantium eum, totam earum commodi corrupti eaque? Quis, soluta.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt obcaecati ullam omnis excepturi similique harum sit non provident cum doloribus sequi laudantium eum, totam earum commodi corrupti eaque? Quis, soluta.</p>
      </div>
      <div className={cn(style.about_Upasana_Contain, 'about_Image_Contain')}>
        <Image
          quality={100}
          className={style.upasana_Img_Top}
          src={apsmym} alt='apsmym'
          width={2271} height={1198} />
        <Image
          quality={100}
          priority
          className={style.swamiji_Image}
          src={swamiji} alt='H.D.H.P.P Prabodhjivan Swami'
          width={2271} height={1736} />
      </div>
    </section>
  )
}
