import './App.css';
import Home from './component/home/Home';
import About from './component/about/About';
import Navbar from './component/nav/Navbar';
import Service from './component/service/Service';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
