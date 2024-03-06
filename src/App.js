import Footer from "./footer/Footer";
import Header from "./header/Header";
import Girls from "./kid/Girls";
import Mens from "./men/Mens";

import Slider from "./slider/Slider";
import Slider1 from "./slider/Slider1";
import Womens from "./women/Womens";


function App() {
  return (
    <div className="App">
    <Header/>
    <Slider/>
    <Mens/>
    <Womens/>
    <Girls/>
    <Footer/>
    </div>
  );
}

export default App;
