import  { useContext } from "react";
import {CartContext} from '../../../App'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
// import "../newarrivals/style.css";

const Dcard = () => {
  const {addToCart} = useContext(CartContext)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={value.cover} alt="" width="100%" height="250px" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
                <button onClick={() => {console.log('click');addToCart(value)}}>Add to cart</button>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
