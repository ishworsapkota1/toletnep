import { Route, Routes } from "react-router-dom";
import Homes from "./assets/homefolder/Homes";
import WishList from "./assets/wishlist/WishList";
import Settings from "./assets/settings/Settings";
import Layouts from "./assets/homefolder/Layouts";
import Navbars from "./assets/dropdowns/Navbars";
import NewKycChild from "./assets/settings/settingscomponents/editprofile/NewKycChild";
import { createContext, useState } from "react";

export const CartContext = createContext([])



function App() {
const [cart, setCart] = useState([])
const cartHelperFunction = {
  addToCart: (item) => {
 const isItemInCart = cart.find((cartItem) => cartItem.name === item.name);

  if (isItemInCart) {
  setCart(
      cart.map((cartItem) =>
            cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
  );
  } else {
  setCart([...cart, { ...item, quantity: 1 }]);
  }

  }
}
  return (
    <div>
      {/* <Homes />; */}
      <Navbars />

<CartContext.Provider value={{addToCart:cartHelperFunction.addToCart, cart }}>

      <Routes>
        <Route path="/" element={<Homes />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/newkycchild" element={<NewKycChild />}></Route>
      </Routes>
</CartContext.Provider>
      <Layouts />
    </div>
  );
}
export default App;
// // ----------------------------------------------------------------
