import Latest from "./Latest/Latest";
// import WeDo from "./WeDo/WeDo";
// import Reviews from './Reviews/Reviews';
// import Referances from './Referances/Referances';
// import Blog from './Blog/Blog';
import HeroSlider from "./HeroSlider/HeroSlider";
import PremiumMovies from "./PremiumMovies/PremiumMovies";
const Home = () => {
  return (
    <main>
      <HeroSlider />
      <Latest />
      {/* <WeDo /> */}
      <PremiumMovies />
      {/* <Reviews /> */}
      {/* <Team /> */}
      {/* <Referances /> */}
      {/* <Blog /> */}
    </main>
  );
};

export default Home;
