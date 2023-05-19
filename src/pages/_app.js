import "../styles/globals.css";
// import "../styles/style.css";
import "../styles/responsive.css";
import CookieConsent from "react-cookie-consent";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title} - Flyrship</title>
      </Head>

      <Component {...pageProps} />
      <CookieConsent
        location='bottom'
        buttonText='I Accept'
        containerClasses='cookie-alert-box'
        cookieName='myAwesomeCookieName2'
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={360}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
      <Analytics />
    </>
  );
}
