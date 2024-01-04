import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';
import LoadingTopBar from '../../Compnents/LoadingTopBar/LoadingTopBar';
import WishListCartArea from './WishListCartArea/WishListCartArea';
import WishListHero from './WishListHero/WishListHero';

const WishList = () => {
  return (
    <>
      <LoadingTopBar />
      <CustomHelmet title="Wishlist" />
      <WishListHero />
      <WishListCartArea />
    </>
  );
};

export default WishList;
