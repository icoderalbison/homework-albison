import "./app.scss";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Bonuses from "./pages/bonuses/Bonuses";
import Faq from "./pages/faq/Faq";
import Home from "./pages/home/Home";
import HowToBuy from "./pages/How to buy/How-to-buy";
import Prices from "./pages/prices/Prices";
import Sales from "./pages/sales/Sales";

import { Routes, Route } from "react-router-dom";
import Blog from "./pages/blog/Blog";

// import Change from './pages/change/change'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/price" element={<Prices />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/bonuses" element={<Bonuses />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
