import Latest from './Latest/Latest';

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
    </main>
  );
};

export default Home;
