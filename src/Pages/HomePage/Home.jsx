import About from "../About/About";
import HeroSection from "../Component/MainSections/HeroSection";
import Navbar from "../Component/Navbar";
import StarBackGround from "../Component/StarBackGround";
import ThemeToggle from "../Component/Theme";
import ContactSection from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

 
const  Home= () =>{
  return (
    <div >
<ThemeToggle/>
<StarBackGround/>
<Navbar/>
<main>
  <HeroSection/>
  <About/>
  <Skills/>
  <Projects/>
  <ContactSection/>
</main>
<Footer/>
    </div>
  )
}
export default Home;