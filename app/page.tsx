import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
