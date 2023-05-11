import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SelectedCategoryScreen from "./components/Screens/SelectedCategoryScreen";
import HomeScreen from "./components/Screens/HomeScreen";
import ProductDetail from "./components/Screens/ProductDetail";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import BasketDetail from "./components/BasketDetail";

type CartItem = {
  id: any;
  quantity: number;
  img: any;
  price: any;
  name: any;
};
function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [sid, setSid] = useState<any>();
  const [countProduct, setCountProduct] = useState<any>(null);
  const [cardItems, setCardItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

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
          <Navbar cardItems={cardItems} setCardItems={setCardItems} sid={sid} />
        </div>
      )}
      <main className="py-10">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/products/:id"
            element={
              <SelectedCategoryScreen
                setSid={setSid}
                countProduct={countProduct}
                setCountProduct={setCountProduct}
                cardItems={cardItems}
                setCardItems={setCardItems}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <ProductDetail
                sid={sid}
                cardItems={cardItems}
                setCardItems={setCardItems}
              />
            }
          />
          <Route
            path="/basket"
            element={
              <BasketDetail cardItems={cardItems} setCardItems={setCardItems} />
            }
          ></Route>{" "}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
