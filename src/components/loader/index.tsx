import { FC, useRef, useEffect } from 'react';
// import { motion } from "framer-motion";
import Image from 'next/image'
import style from './loader.module.scss';
import Counter from '../counter';
import { getExtraClasses } from '../../utils/common.util';
import cn from 'classnames';
import { gsap } from 'gsap';

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';

export const Loader: FC<{ className?: string }> = ({ className }) => {
  const el = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    let loaderTl: ReturnType<typeof gsap.timeline> = gsap.timeline();
    if (el.current?.classList.contains('active')) {
      loaderTl.set('.loader_Content', {
        y: 40,
        autoAlpha: 0,
      }).to('.loader_Content', {
        duration: 2,
        y: 0,
        autoAlpha: 1,
        ease: 'power4.out',
        clearProps: true,
      }, 0)
      loaderTl.set('.single_Img', {scale: 0.7, autoAlpha: 0}, 0)
      .to('.single_Img', {
        duration: 2,
        ease: 'Expo.easeOut',
        scale: 1,
        stagger: {amount: 0.6, grid: 'auto', from: 'center'}
      }, '-=2')
      .to('.single_Img', {
        duration: 3,
        ease: 'Power1.easeOut',
        autoAlpha: 1,
        stagger: {amount: 0.6, grid: 'auto', from: 'center'},
        clearProps: true,
      }, '-=2');
    }
  },[el])

  const extraClasses = getExtraClasses(style, className);
  return (
    <div ref={el} className={cn(style.loader_Container, extraClasses)}>
      <div className={cn(style.loader_Content, 'loader_Content')}>
        <h1 className={cn(style.main_Title, 'main_Title')}>
          <small className={style.main_Title_Hari}>Hari</small>
          <small className={style.main_Title_Prabodham}>Prabodham</small>
          <span className={style.main_Title_Yuva}>Yuva</span>
          <span className={style.main_Title_Mahotsav}>Mahotsav</span>
        </h1>
        <Counter />
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
    </div>
  )
}
