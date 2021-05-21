import Head from "next/head";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div className="">
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
    </div>
  );
}
