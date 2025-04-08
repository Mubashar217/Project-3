import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Ourclient from "./components/ourclient/Ourclient";
// import Footer from "./components/footer/Footer";

export default function Home() {
  return (
  <h1 className="text-3xl font-bold ">
    <Navbar/>
    <Header/>
    <About/>
    <Ourclient/>
    <Contact/>
    {/* <Footer/> */}

  </h1>
  );
}
