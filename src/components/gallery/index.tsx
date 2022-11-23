import React, { FC, useRef, useEffect } from "react";
import style from './gallery.module.scss';
import { getExtraClasses } from '@utils/common.util';
import cn from 'classnames'
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import images from "./images";

export const Gallery: FC<{ className?: string }> = ({ className }) => {
  const extraClasses = getExtraClasses(style, className);

  const el = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (el.current) {

      let containerHeight = document.querySelector?.('.img_Wrapper')?.clientHeight;
      // console.log(containerHeight);
      gsap.set('.img_Column:nth-child(2n)', {
        y: (index, target, targets) => { return (-target?.offsetHeight + containerHeight) },
      })

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.img_Wrapper',
          start: 'top bottom',
          end: '+=300%',
          scrub: true,
          // pin: true,
        }
      })
      .to('.img_Column:nth-child(1), .img_Column:nth-child(3)', {
        y: (index, target, targets) => { return (-target?.offsetHeight + containerHeight) },
        duration: 1,
      })
      .to('.img_Column:nth-child(2n)', {
        y: 0,
        duration: 1,
      }, '-=1')

      return () => {
        // if (aboutTl) {
        //   aboutTl.kill();
        //   aboutImgTl.kill();
        //   ScrollTrigger.getAll().forEach(e => e.kill());
        // }
      };
    }

  }, [el]);

  return (
    <section ref={el} className={cn(style.gallery_Section, extraClasses, 'gallery_Section')}>
      <div className={cn(style.img_Wrapper, 'img_Wrapper')}>
        <div className={cn(style.img_Column, 'img_Column1 img_Column')}>
          {images.slice(0, 5).map((image, index) => (
            <div key={index} className={style.img_Container}>
              <Image priority src={image} className={style.img} width={200} height={300} alt='' />
            </div>
          ))}
        </div>
        <div className={cn(style.img_Column, 'img_Column2 img_Column')}>
          {images.slice(5, 10).map((image, index) => (
            <div key={index} className={style.img_Container}>
              <Image priority src={image} className={style.img} width={200} height={300} alt='' />
            </div>
          ))}
        </div>
        <div className={cn(style.img_Column, 'img_Column3 img_Column')}>
          {images.slice(10, 15).map((image, index) => (
            <div key={index} className={style.img_Container}>
              <Image priority src={image} className={style.img} width={200} height={300} alt='' />
            </div>
          ))}
        </div>
        <div className={cn(style.img_Column, 'img_Column4 img_Column')}>
          {images.slice(15, 20).map((image, index) => (
            <div key={index} className={style.img_Container}>
              <Image priority src={image} className={style.img} width={200} height={300} alt='' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
