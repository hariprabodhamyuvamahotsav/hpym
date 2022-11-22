import { FC, useRef, useEffect } from 'react';
// import { motion } from "framer-motion";
import Image from 'next/image'
import style from './loader.module.scss';
import { Counter } from '../counter';
import { getExtraClasses } from '../../utils/common.util';
import cn from 'classnames';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';

export const Loader: FC<{ className?: string }> = ({ className }) => {
  const el = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let loaderTl: ReturnType<typeof gsap.timeline> = gsap.timeline();
    if (el.current) {
      el.current.classList.add(style.active_loader);
      loaderTl.set('.loader_Content *, .main_Slogan_Wrapper', {
        y: 30,
        autoAlpha: 0,
      }).to('.loader_Content *', {
        duration: 2,
        y: 0,
        ease: 'expo.out',
        stagger: {amount: 1},
        clearProps: true,
      })
      .to('.loader_Content *', {
        duration: 3,
        ease: 'expo.out',
        autoAlpha: 1,
        stagger: {amount: 1},
        clearProps: true,
      }, 0);
      loaderTl.set('.single_Img', {scale: 0.7, autoAlpha: 0}, 0)
      .to('.single_Img', {
        duration: 2,
        ease: 'expo.out',
        scale: 1,
        stagger: {amount: 0.6, grid: 'auto', from: 'center'}
      }, '-=2')
      .to('.single_Img, .main_Slogan_Wrapper', {
        duration: 3,
        ease: 'power1.out',
        y: 0,
        autoAlpha: 1,
        stagger: {amount: 0.6, grid: 'auto', from: 'center'},
        clearProps: true,
      }, '-=2.5');

      const colorShift = gsap.to("body", { backgroundColor: "#ccc" })
      ScrollTrigger.create({
        trigger: '.loader_Container',
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        animation: colorShift
      });

      return () => {
        if (loaderTl) {
          loaderTl.kill();
        }
      };
    }
  },[el])

  const extraClasses = getExtraClasses(style, className);
  return (
    <section ref={el} className={cn(style.loader_Container, extraClasses, 'loader_Container')}>
      <div className={cn(style.loader_Content, 'loader_Content')}>
        <h1 className={cn(style.main_Title, 'main_Title')}>
          <small className={style.main_Title_Hari}>Hari</small>
          <small className={style.main_Title_Prabodham}>Prabodham</small>
          <strong className={style.main_Title_Yuva}>Yuva</strong>
          <strong className={style.main_Title_Mahotsav}>Mahotsav 2023</strong>
        </h1>
        <Counter className={style.main_Counter} />
      </div>

      <div className={style.img_Grid_Container}>
        <div className={style.img_Grid}>
          <div className={style.img_Row}>
            <Image className={cn(style.single_Img, 'single_Img')} src={img1} alt='' width={150} height={200} />
            <Image className={cn(style.single_Img, 'single_Img')} src={img2} alt='' width={150} height={200} />
            <Image className={cn(style.single_Img, 'single_Img')} src={img3} alt='' width={150} height={200} />
          </div>
          <div className={style.img_Row}>
            <Image className={cn(style.single_Img, 'single_Img')} src={img1} alt='' width={150} height={200} />
            <Image className={cn(style.single_Img, 'single_Img')} src={img2} alt='' width={150} height={200} />
            <Image className={cn(style.single_Img, 'single_Img')} src={img3} alt='' width={150} height={200} />
          </div>
        </div>
        <div className={style.img_Grid}>
          <div className={style.img_Row}>
            <Image className={cn(style.single_Img, 'single_Img')} src={img7} alt='' width={150} height={200} />
            <Image className={cn(style.single_Img, 'single_Img')} src={img8} alt='' width={150} height={200} />
            <Image className={cn(style.single_Img, 'single_Img')} src={img9} alt='' width={150} height={200} />
          </div>
          <div className={style.img_Row}>
            <Image className={cn(style.single_Img, 'single_Img')} src={img7} alt='' width={150} height={200} />
            <Image className={cn(style.single_Img, 'single_Img')} src={img8} alt='' width={150} height={200} />
            <Image className={cn(style.single_Img, 'single_Img')} src={img9} alt='' width={150} height={200} />
          </div>
        </div>
      </div>
      <div className={cn(style.main_Slogan_Wrapper, 'main_Slogan_Wrapper')}>
        <div className={style.main_Slogan_Span}>
          <span>Bas ek, &apos;Tu Raji Tha&apos;&nbsp;Bas ek, &apos;Tu Raji Tha&apos;&nbsp;</span>
          <span>Bas ek, &apos;Tu Raji Tha&apos;&nbsp;Bas ek, &apos;Tu Raji Tha&apos;&nbsp;</span>
        </div>
      </div>
    </section>
  )
}
