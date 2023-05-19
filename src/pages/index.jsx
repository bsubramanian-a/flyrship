import Head from "next/head";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import { HowItWorks } from "../components/Home/HowItWorks";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>

      <main>
        <Navbar></Navbar>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <HowItWorks></HowItWorks>
        <Footer></Footer>
      </main>
    </>
  );
}
