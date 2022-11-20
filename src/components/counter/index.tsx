import { CreateTypes } from 'canvas-confetti';
import React, { useCallback, useRef, useState } from "react";
import ReactCanvasConfetti, {type IProps} from 'react-canvas-confetti';
import style from './counter.module.scss';

type CreateConfetti = NonNullable<Parameters<NonNullable<IProps["refConfetti"]>>[0]>

export default function Counter() {
  const refAnimationInstance = useRef<CreateConfetti | null>(null);

  const getInstance = useCallback((instance: CreateConfetti | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current?.({
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
    <>
      <p className={style.count_Para}>{count} are attending</p>
      <button className={style.count_Btn} onClick={setcount}> I am attending &#128276;</button>
      <ReactCanvasConfetti refConfetti={getInstance} className={style.confetti_Canvas} />
    </>
  )
}