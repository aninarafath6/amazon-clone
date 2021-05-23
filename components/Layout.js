import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
