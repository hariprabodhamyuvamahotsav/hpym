import { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis'

import Head from 'next/head'
import { Loader } from '../components/loader';
import { About } from 'components/about';

export default function Home() {
  const mainEl = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (mainEl.current) {
      const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })

      const raf = (time?: number) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      return () => lenis.destroy();
    }
  }, [mainEl])

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>HariPrabodham Yuva Mahotsav 2023</title>
        <meta name="description" content="HariPrabodham Yuva Mahotsav 2023" />
        <link rel="icon" href="../resources/images/HPYM-2023-Logo.jpg" />
      </Head>
      <main className='viewport' ref={mainEl}>
        <Loader />
        <About />
      </main>

    </>
  )
}
