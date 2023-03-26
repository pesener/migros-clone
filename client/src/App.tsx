import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);
  return (
    <>
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
    </>
  );
}

export default App;
