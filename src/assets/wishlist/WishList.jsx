import  { useContext } from "react";
import { CartContext } from "../../App";

const WishList = () => {
  const {cart} = useContext(CartContext)
  console.log(cart)
  return <div className="wishlist">
    <h1>Wishlist</h1>
    <ul>

    {cart.map(item => {
      return <li key={item.name}>{item.name}</li>
    })}
    </ul>

  </div>;
};

export default WishList;
