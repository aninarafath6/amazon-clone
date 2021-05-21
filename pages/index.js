import Head from "next/head";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import ProductFeed from "../components/product feed/ProductFeed";
import axios from "axios";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 select-none">
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

        {/* PRODUCT FEED CONTAINER */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      products:products.data
    },
  };
}
