import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Joyonto Kumar Das",
  description: "Frontend Developer & DevOps - Portfolio",
  openGraph: {
    title: "Joyonto Kumar Das",
    description: "Frontend Developer & DevOps - Portfolio",
    type: "website",
  },
};

export default function Home() {
  return (
    <ClientLayout>
      <main>
        <Preloader />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </ClientLayout>
  );
}
