import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next JS Starter Template</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
