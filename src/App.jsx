import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import Saved from "./pages/Saved";
import Navbar from "./Components/Navbar";
import { SavedProvider } from "./Context/SavedContext";
function App() {
  return (
    <SavedProvider>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<Create />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </div>
      </Router>
    </SavedProvider>
  );
}

export default App;
