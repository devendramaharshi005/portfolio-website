import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import First from "./components/First";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center w-full gap-8">
      <Header />
      <div className="container gap-8 flex flex-col items-center ">
        <First />
        <Projects />
      </div>
      <div className="w-full flex flex-col items-center ">
        <About />
      </div>

      <div className="container gap-8 flex flex-col items-center ">
        <Contact />
        <SocialLinks />
      </div>
    </main>
  );
}
