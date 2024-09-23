import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/SharedComponts/Navbar";
import Footer from "./Components/SharedComponts/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;