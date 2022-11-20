import React, { useCallback, useRef, useState } from "react";
import Image from 'next/image'
import style from './loader.module.scss';
import ReactCanvasConfetti from "react-canvas-confetti";

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

export default function Loader() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance: null) => {
    refAnimationInstance.current = instance;
  }, []);
  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  const [count, setCount] = useState(0);
  const setcount = () => {
    fire();
    setCount((count) => count + 1)
  };
  return (
    <div className={style.loader_Container}>
      <div className={style.loader_Content}>
        <h1 className={style.main_Title}>
          <small className={style.main_Title_Hari}>Hari</small>
          <small className={style.main_Title_Prabodham}>Prabodham</small>
          <span className={style.main_Title_Yuva}>Yuva</span>
          <span className={style.main_Title_Mahotsav}>Mahotsav</span>
        </h1>
        <p className={style.count_Para}>{count} are attending</p>
        <button className={style.count_Btn} onClick={setcount}> I am attending </button>
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
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  )
}
