import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import Proposal from "./pages/Proposal";
import Reference from "./pages/Reference";
import Request from "./pages/Request";
//import Blog from "./pages/Blog";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <Navigation />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/request" element={<Request />} />
            {/*<Route path="/blog" element={<Blog />} /> */}
            <Route path="/download" element={<Download />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
