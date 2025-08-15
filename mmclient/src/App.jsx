import { Routes, Route } from 'react-router-dom';
import "./App.css";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/transactions" element={<Products />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
