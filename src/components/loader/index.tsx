import React, { useCallback, useRef, useState } from "react";
import Image from 'next/image'
import style from './loader.module.scss';
import Counter from '../counter';


import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';



export default function Loader() {

  return (
    <div className={style.loader_Container}>
      <div className={style.loader_Content}>
        <h1 className={style.main_Title}>
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
            <Image className={style.single_Img} src={img1} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img2} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img3} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img4} alt='' width={150} height={200} />
          </div>
          <div className={style.img_Row}>
            <Image className={style.single_Img} src={img1} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img2} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img3} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img4} alt='' width={150} height={200} />
          </div>
        </div>
        <div className={style.img_Grid}>
          <div className={style.img_Row}>
            <Image className={style.single_Img} src={img7} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img8} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img9} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img10} alt='' width={150} height={200} />
          </div>
          <div className={style.img_Row}>
            <Image className={style.single_Img} src={img7} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img8} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img9} alt='' width={150} height={200} />
            <Image className={style.single_Img} src={img10} alt='' width={150} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
