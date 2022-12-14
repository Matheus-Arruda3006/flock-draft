import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About1 from '../components/about'
import Customer from '../components/customers'
import Footer1 from '../components/footer'
import Products from '../components/products.jsx';






export default function Home() {
  return (
    <div>
      <Head>
        <title>Flock Tech</title>
        <meta name="description" content="Generated by create next app" />     
      </Head>
      <Navbar/>   
      <Hero/>
      <About1 />
      <Products/>
      <Customer/>
      <Footer1/>
    </div>
  )
}
