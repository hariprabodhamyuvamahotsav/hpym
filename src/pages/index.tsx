import Head from 'next/head'
import { Hero } from '@components/hero';
import { About } from '@components/about';
import { Gallery } from '@components/gallery';

import logo from '../resources/images/HPYM_2023.jpg';
import { Loader } from '@components/loader';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>HariPrabodham Yuva Mahotsav 2023</title>
        <meta name="description" content="HariPrabodham Yuva Mahotsav 2023" />
        <link rel="icon" href={logo.src} />
      </Head>
      <Loader />
      <main className='viewport'>
        <Hero />
        <About />
        <Gallery />
        <section className="sample" />
      </main>

    </>
  )
}
