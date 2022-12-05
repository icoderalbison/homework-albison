import "./app.scss";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/about/Main.layout";
import Tabs from "./components/tab/Tabs";
import data1 from './components/tab/tabsType1.json'
import Page4 from "./pages/Page4/Page4";


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
