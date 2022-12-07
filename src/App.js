import "./app.scss";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import Faq from "./pages/faq/Faq";
import Apply from "./pages/page4/Page4";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/about/Main.layout";
import Tabs from "./components/tab/Tabs";
import data1 from './components/tab/tabsType1.json'

function App() {
  return (
    <div className="App">
      <MainLayout>
      <Tabs {...data1}/>

      </MainLayout>
    </div>
  );
}

export default App;
