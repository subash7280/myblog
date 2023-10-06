import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Extras from "./components/Extras/Extras";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <About />
      <Extras />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};
export default App;