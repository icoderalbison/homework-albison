import "./app.scss";
import Navbar from './layouts/navbar/Navbar'
import Footer from "./layouts/footer/Footer";
import Faq from './pages/faq/Faq'
import Apply from './pages/page4/Page4'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/apply" element={<Apply/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
