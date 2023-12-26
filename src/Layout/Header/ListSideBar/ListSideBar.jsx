import CloseIcon from '@mui/icons-material/Close';
import marketSvg from '../../../Assets/Images/market-basket.svg';
import './ListSideBar.scss';
import BasketCard from '../../../Compnents/BasketCard/BasketCard';
const ListSideBar = ({ sideBarCart, setSideBarCart }) => {
  const handleClose = () => {
    document.body.classList.remove('no-scroll');
    setSideBarCart(false);
  };
  return (
    <div className="all_sidebar">
      <div className={`sidebar_cart ${sideBarCart ? 'active' : ''}`}>
        <div className="sidebar_cart_header">
          <h3>Cart List</h3>
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="sidebar_header_body">
          <BasketCard />
          {/* bunu true false mentiqi ile yaz yeni card bos olduqda bu gorunsun dolu olduqda ise cardin ozu */}
          {/* <figure className="bg_market_image">
            <figcaption>Basket is empty</figcaption>
            <img src={marketSvg} alt={marketSvg} />
          </figure> */}
          {/* bunu true false mentiqi ile yaz yeni card bos olduqda bu gorunsun dolu olduqda ise cardin ozu */}
        </div>
        <div className="sidebar_header_footer">
          <h4>Total Price:</h4>
          <span>7609$</span>
        </div>
      </div>
      <div
        className={`sidebar_overlay ${sideBarCart ? 'active_lay' : ''}`}
        onClick={handleClose}></div>
    </div>
  );
};

export default ListSideBar;
