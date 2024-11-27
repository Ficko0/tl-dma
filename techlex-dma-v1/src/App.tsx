import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PreFooterSection from "./components/PreFooterSection";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <PreFooterSection />
    </>
  );
}
