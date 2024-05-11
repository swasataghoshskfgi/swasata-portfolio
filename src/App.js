import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto">
           <Banner/>
           <Skills/> 
           <Projects/>
           <Resume />
           <Contact/>
           <FooterBottom/>
        </div>
      </div>
    </>
  );
}

export default App;
