"use client" 
import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "./pages/home/homepage";
import { ParallaxProvider } from "react-scroll-parallax";
export default function Home() {
  return (
    <ParallaxProvider>
      <Homepage />
    </ParallaxProvider>
  );
}
