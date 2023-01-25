import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/home/Home";
import About from "./scenes/about/About";
import Contact from "./scenes/contact/Contact";
import Service from "./scenes/service/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
