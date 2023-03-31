import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeyveSebze from "./components/Screens/MeyveSebze";
import HomeScreen from "./components/Screens/HomeScreen";
import SutKahval from "./components/Screens/SutKahval";

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);
  return (
    <Router>
      {loading ? (
        <div className="fixed inset-0 flex  justify-center items-center">
          <img
            className="  h-[90px] w-[90px] bg-opacity-10 "
            src="https://www.migros.com.tr/assets/icons/loading-indicator.gif"
            alt="indicator"
          />
        </div>
      ) : (
        <div>
          <Navbar />
        </div>
      )}
      <main className="py-10">
        <div>
          <Routes>
            <Route path="/" element={<HomeScreen />} />

            <Route path="/meyveSebze" element={<MeyveSebze />} />
            <Route path="/sutKahval " element={<SutKahval />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
