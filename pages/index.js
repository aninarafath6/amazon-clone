import Head from "next/head";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import ProductFeed from "../components/product feed/ProductFeed";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import Category from "../components/category/Category";
import Footer from "../components/footer/Footer";

export default function Home({ products }) {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });
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
        {!isBigScreen && <Category />}
        <Banner />
        {/* PRODUCT FEED CONTAINER */}
        <ProductFeed products={products} />

        <Footer />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      products: products.data,
    },
  };
}
