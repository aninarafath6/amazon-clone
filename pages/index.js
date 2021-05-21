import Head from "next/head";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon Clone</title>
        <meta
          name="description"
          content="amazon cloned using next js and tailwind css "
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* HEADER COMPONENT  */}
      <Header />

      <main className=" mx-auto">
        {/* BANNER */}
        <Banner />
      </main>
    </div>
  );
}
