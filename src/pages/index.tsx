import React, { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Head from 'next/head'
import { Loader } from '../components/loader';

export default function Home() {
  const ref = useRef(null);
  const options = {
    smooth: true,
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>HariPrabodham Yuva Mahotsav 2023</title>
        <meta name="description" content="HariPrabodham Yuva Mahotsav 2023" />
        <link rel="icon" href="../resources/images/HPYM-2023-Logo.jpg" />
      </Head>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <React.StrictMode>
          <main data-scroll-container ref={ref}>
            <Loader />
            <section className="intro" data-scroll-section>
              <h1>This is the Introduction section</h1>
            </section>
            <section className="intro" data-scroll-section>
              <h1>This is the Introduction section</h1>
            </section>
            <section className="intro" data-scroll-section>
              <h1>This is the Introduction section</h1>
            </section>
            <section className="intro" data-scroll-section>
              <h1>This is the Introduction section</h1>
            </section>
            <section className="intro" data-scroll-section>
              <h1>This is the Introduction section</h1>
            </section>
          </main>
        </React.StrictMode>
      </LocomotiveScrollProvider>
    </>
  )
}
