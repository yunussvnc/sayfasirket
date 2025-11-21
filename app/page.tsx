import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Stats from "@/components/Stats";
import Values from "@/components/Values";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Vision />
      <Stats />
      <Values />
      <Projects />
      <Process />
      <Partners />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}
