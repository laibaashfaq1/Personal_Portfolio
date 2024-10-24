
import About from "./component/About";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";



export default function Home() {
 
  return (
    <div>
    
      <Hero />

      <div id="about-section">
        <About />
      </div>


      <div id="services-section">
          <Services/>
        </div>


      <div id="portfolio-section">
            <Portfolio/>
          </div>

      
      <div id="contact-section">
        <Contact />
      </div>


    </div>
  );
}