import CloseIcon from "@mui/icons-material/Close";
// import marketSvg from '../../../Assets/Images/market-basket.svg';
import "./ListSideBar.scss";
import axios from "axios";
import BasketCard from "../../../Compnents/BasketCard/BasketCard";
import { useEffect, useState } from "react";
const BASKET_URL = "http://localhost:3031/basket";
const initialState = {
  basket: [],
  totalPrice: 0,
};
const ListSideBar = ({ sideBarCart, setSideBarCart }) => {
  const [allBasketState, setAllBasketState] = useState([]);
  const profile = JSON.parse(localStorage.getItem("user"));
  const handleClose = () => {
    document.body.classList.remove("no-scroll");
    setSideBarCart(false);
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    // if (sideBarCart) {
    axios.get(BASKET_URL).then((res) => {
      setAllBasketState(res.data);
      let basket = [];
      let totalPrice = 0;
      res.data?.forEach?.((currBasket) => {
        if (currBasket?.[profile?.id]?.userId === profile?.id) {
          basket.push(currBasket?.[profile?.id]);
          totalPrice += currBasket?.[profile?.id].price;
        }
      });
      setState((prevState) => ({
        ...prevState,
        basket,
        totalPrice,
      }));
    });
  }, [sideBarCart, profile?.id]);

  const handleDelete = (movieId) => {
    const findId = allBasketState.find((findMovie) => {
      console.log("findMovie?.[profile?.id]?.id ", findMovie?.[profile?.id]);

      return findMovie?.[profile?.id]?.id === movieId;
    })?.id;
    axios.delete(`${BASKET_URL}/${findId}`).then(() => {
      axios.get(BASKET_URL).then((res) => {
        console.log("res.data", res.data);
        setAllBasketState(res.data);
        let basket = [];
        let totalPrice = 0;
        res.data?.forEach?.((currBasket) => {
          if (currBasket?.[profile?.id]?.userId === profile?.id) {
            basket.push(currBasket?.[profile?.id]);
            totalPrice += currBasket?.[profile?.id].price;
          }
        });
        setState((prevState) => ({
          ...prevState,
          basket,
          totalPrice,
        }));
      });
    });
  };

  return (
    <div className="all_sidebar">
      <div className={`sidebar_cart ${sideBarCart ? "active" : ""}`}>
        <div className="sidebar_cart_header">
          <h3>Cart List</h3>
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="sidebar_header_body">
          <BasketCard
            handleDelete={handleDelete}
            basket={state.basket}
            sideBarCart={sideBarCart}
          />
          {/* bunu true false mentiqi ile yaz yeni card bos olduqda bu gorunsun dolu olduqda ise cardin ozu */}
          {/* <figure className="bg_market_image">
            <figcaption>Basket is empty</figcaption>
            <img src={marketSvg} alt={marketSvg} />
          </figure> */}
          {/* bunu true false mentiqi ile yaz yeni card bos olduqda bu gorunsun dolu olduqda ise cardin ozu */}
        </div>
        <div className="sidebar_header_footer">
          <h4>Total Price:</h4>
          <span>{state.totalPrice}$</span>
        </div>
      </div>
      <div
        className={`sidebar_overlay ${sideBarCart ? "active_lay" : ""}`}
        onClick={handleClose}
      ></div>
    </div>
  );
};

export default ListSideBar;
