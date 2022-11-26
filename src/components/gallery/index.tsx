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
import { SocialMedia } from '@components/social_media';

export const Gallery: FC<{ className?: string }> = ({ className }) => {
  const extraClasses = getExtraClasses(style, className);

  const el = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (el.current) {
      setTimeout(() => {
        let img = document.querySelectorAll('.img_Collage img');
        img.forEach((el) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.gallery_Section',
              start: 'top bottom',
              end: 'bottom top',
              // pin: true,
              scrub: true,
            }
          });
          tl.fromTo(el, {scale: 1},{
            scale: 1.55,
            duration: 1,
            ease: 'none',
          });
        });
      }, 3000);
    }

  }, [el]);

  return (
    <section ref={el} className={cn(style.gallery_Section, extraClasses, 'gallery_Section section')} data-bgcolor="#">
      <div className={style.gallery_Content}>
        <h2 className={style.hash_Tags}>
          <span>#WeForHPYM</span>
          <span>#HPYMSurat</span>
          <span>#HPYM2023</span>
          <span>#HariPrabodham</span>
        </h2>
      </div>
      <div className={cn(style.img_Collage, 'img_Collage')}>
        <div className={style.img_Row}>
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className={style.img_Wrapper}>
              <Image className={style.img} priority src={image} width={600} height={600} alt='' />
            </div>
          ))}
        </div>
        <div className={style.img_Row}>
          {images.slice(3, 5).map((image, index) => (
            <div key={index} className={style.img_Wrapper}>
              <Image className={style.img} priority src={image} width={600} height={600} alt='' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
