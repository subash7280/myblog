import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Extras from "./components/Extras/Extras";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileContent from "./components/MobileResponsiveContent/MobileContent";

const App = () => {

  return (
    <div className="App">
      <MobileContent />
      <NavigationBar />
      <HomePage />
      <About />
      <Extras />
      <Skills />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;