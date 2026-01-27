import Hero from "../sections/Hero/Hero";
import Stats from "../sections/Stats/Stats";
import Services from "../sections/Services/Services";
import About from "../sections/About/About";
import Portfolio from "../sections/Portfolio/Portfolio";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />

      <Footer />
    </>
  );
}
