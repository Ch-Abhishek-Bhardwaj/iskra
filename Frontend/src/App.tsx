
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./pages/Home";
import Practice from "./pages/Practice";
// import Syllabus from "./pages/Syllabus";
// import Practice from "./pages/Practice";
// import Explore from "./pages/Explore";
// import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/syllabus" element={<Syllabus />} /> */}
        <Route path="/practice" element={<Practice />} />
        {/* <Route path="/practice" element={<Practice />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
