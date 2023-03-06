import logo from "./assets/logo.png";

import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header logo={logo} />

      <Cards />

      <Footer />
    </>
  );
}