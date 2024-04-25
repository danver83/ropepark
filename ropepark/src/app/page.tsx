import Image from "next/image";

import Menu from "./components/menu";
import "./globals.css";
import Gallery from "./components/gallery";
import Offer1 from "./components/offer1";
import Tm from "./components/tm";
import About from "./components/about";
import Products from "./components/products";
import Timeline from "./components/timeline";
import SliderV from "./components/sliderV";
import SliderS from "./components/sliderS";
import Otzivy from "./components/otzivy";
import Contactus from "./components/contactus";
import Footer from "./components/footer";
import Burgermenu from "./components/burgermenu";
import Burger from "./components/burger";

export default function Home() {
  return (
    <main className="h-auto">
      <div className="bg-paralax1 bg-fixed  bg-center bg-no-repeat bg-cover h-auto ">
        <Burgermenu />
        <Menu></Menu>
        <Offer1></Offer1>
        <About></About>
        <Products></Products>
        <Gallery></Gallery>
        <Timeline></Timeline>
        <SliderV></SliderV>
        <SliderS></SliderS>
        <Otzivy></Otzivy>
        <Contactus></Contactus>
        <Footer></Footer>
      </div>
    </main>
  );
}
