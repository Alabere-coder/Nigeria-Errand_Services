import Footer from 'component/components/Footer'
import Navbar from 'component/components/Navbar'
import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from 'component/styles/Home.module.css'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>HOMEPAGE</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis consequatur accusantium recusandae aliquid fuga reprehenderit numquam earum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis mollitia accusamus veniam facere? Molestias dicta dolore tenetur quidem soluta!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illum facere vel magni veniam ab vero dicta quo quia labore.</p>
      {/* <Footer /> */}
    </div>
  )
}
