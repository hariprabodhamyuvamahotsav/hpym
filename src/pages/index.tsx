import Head from 'next/head'
// import Image from 'next/image'
import Loader from '../components/loader';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>HariPrabodham Yuva Mahotsav 2023</title>
        <meta name="description" content="HariPrabodham Yuva Mahotsav 2023" />
        <link rel="icon" href="/HPYM-2023-Logo.jpg" />
      </Head>
      <Loader />
    </>
  )
}
