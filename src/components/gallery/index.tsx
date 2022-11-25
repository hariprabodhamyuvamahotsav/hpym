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

      setTimeout(() => {

        gsap.to('body', {
          backgroundColor: '#2F4858',
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.gallery_Section',
            start: 'top 125%',
            end: 'top top',
            scrub: true,
          }
        });

        let img_Scroller = document.querySelectorAll('.img_Contain_Scroller');

        img_Scroller.forEach((el) => {
          console.log(el.scrollWidth - document.documentElement.clientWidth);
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.gallery_Section',
              start: 'top top',
              end: '+=300%',
              // pin: true,
              scrub: true,
            }
          });
          tl.to(el, {
            x: () => -(el.scrollWidth - document.documentElement.clientWidth) + "px",
            duration: 1,
            ease: 'none',
          });
        });
      }, 3000);



      // let containerHeight = document.querySelector?.('.img_Wrapper')?.clientHeight!;
      // // console.log(containerHeight);
      // gsap.set('.img_Column:nth-child(2n)', {
      //   y: (index, target, targets) => { return (-target?.offsetHeight + containerHeight) },
      // })

      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.img_Wrapper',
      //     start: 'top bottom',
      //     end: '+=300%',
      //     scrub: true,
      //     // pin: true,
      //   }
      // })
      // .to('.img_Column:nth-child(1), .img_Column:nth-child(3)', {
      //   y: (index, target, targets) => { return (-target?.offsetHeight + containerHeight) },
      //   duration: 1,
      // })
      // .to('.img_Column:nth-child(2n)', {
      //   y: 0,
      //   duration: 1,
      // }, '-=1')

      // return () => {
      //   if (tl) {
      //     tl.kill();
      //     ScrollTrigger.getAll().forEach(e => e.kill());
      //   }
      // };
    }

  }, [el]);

  return (
    <section ref={el} className={cn(style.gallery_Section, extraClasses, 'gallery_Section')}>
      <div className={style.img_Contain}>
        <div className={cn(style.img_Contain_Scroller, 'img_Contain_Scroller')}>
          {images.slice(0, 15).map((image, index) => (
            <div key={index} className={style.img_Wrapper}>
              {/* <div className={cn(style.img, style.img_Glow)}>
                <Image priority src={image} width={200} height={300} alt='' />
              </div> */}
              <div className={style.img}>
                <Image priority src={image} width={200} height={300} alt='' />
              </div>
            </div>
          ))}
        </div>
        <div className={cn(style.img_Contain_Scroller, 'img_Contain_Scroller')}>
          {images.slice(15, 31).map((image, index) => (
            <div key={index} className={style.img_Wrapper}>
              {/* <div className={cn(style.img, style.img_Glow)}>
                <Image priority src={image} width={200} height={300} alt='' />
              </div> */}
              <div className={style.img}>
                <Image priority src={image} width={200} height={300} alt='' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.tags_contain}></div>
      {/* <div className={cn(style.img_Wrapper, 'img_Wrapper')}>
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
      </div> */}
    </section>
  )
}
