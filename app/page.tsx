import Header from "@/components/Header";
import Vision from "@/components/Vision";
import Stats from "@/components/Stats";
import Values from "@/components/Values";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Services is now included in Header */}
      <Vision />
      <Stats />
      <Values />
      <Projects />
      <Process />
      <Partners />
      {/* Testimonials removed */}
      <Blog />
      <Footer />
    </main>
  );
}
