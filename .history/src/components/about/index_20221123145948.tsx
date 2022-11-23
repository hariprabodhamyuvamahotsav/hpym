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
import pjdas from '../../resources/images/pjdas_main.png';

import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/7.png';
import img6 from './images/6.png';

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
      .set('.about_Image_Contain', {
        className: `${style.about_Image_Contain} ${style.active}`
      }, '-=3.5')


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
      <div className={cn(style.about_Upasana_Contain, 'about_Upasana_Contain')}>
        <div className={cn(style.upasana_APSYMaharaj)}>
          <div className={cn(style.upasana_APMaharaj)}>
            <div className={style.upasana_Img_Sm}>
              <Image
                quality={100}
                priority
                src={img1} alt='Maharaj'
                width={500} height={440} />
            </div>
            <div className={style.upasana_Img_Sm}>
              <Image
                quality={100}
                priority
                src={img2} alt='gunatit'
                width={500} height={440} />
            </div>
          </div>
          {/* <div className={cn(style.upasana_SYMaharaj)}>
            <picture className={style.upasana_Img_Sm}>
              <Image
                quality={100}
                priority
                src={img3} alt='Maharaj'
                width={500} height={440} />
            </picture>
            <picture className={style.upasana_Img_Sm}>
              <Image
                quality={100}
                priority
                src={img4} alt='gunatit'
                width={500} height={440} />
            </picture>
          </div> */}
        </div>
      </div>
      <picture className={cn(style.about_Image_Contain, 'about_Image_Contain')}>
        {/* <Image
          quality={100}
          priority
          className={style.about_Image}
          src={pjdas} alt='H.D.H.P.P Prabodhjivan Swami'
          width={500} height={440} /> */}
      </picture>
      {/* <div className={style.about_Columns}>
      </div> */}
    </section>
  )
}
