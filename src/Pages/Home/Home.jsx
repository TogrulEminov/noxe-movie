import Latest from './Latest/Latest';
// import WeDo from "./WeDo/WeDo";
// import Reviews from './Reviews/Reviews';
// import Blog from './Blog/Blog';
import HeroSlider from './HeroSlider/HeroSlider';
import PremiumMovies from './PremiumMovies/PremiumMovies';
import TrendingSection from './TrendingSection/TrendingSection';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';
const Home = () => {
  return (
    <main>
      <HeroSlider />
      <Latest />
      <PremiumMovies />
      <TrendingSection />
      <Popular />
      <TopRated />
      {/* <Reviews /> */}
      {/* <Team /> */}

      {/* <Blog /> */}
    </main>
  );
};

export default Home;
