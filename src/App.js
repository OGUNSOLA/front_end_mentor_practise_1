/** @format */

import "./App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Question from "./Components/Question";
import Reviews from "./Components/Reviews";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Intro />
        <Question />
        <Reviews />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
