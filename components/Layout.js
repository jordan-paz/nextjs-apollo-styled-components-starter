import Footer from "./Footer";
import Nav from "./Nav";
import SEO from "./SEO";

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
