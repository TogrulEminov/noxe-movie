import HeroPageBanner from './HeroBanner/HeroPageBanner';
import FileringArea from './FileringArea/FileringArea';
import Latest from './Latest/Latest';
import WeDo from './WeDo/WeDo';
import Reviews from './Reviews/Reviews';
import Referances from './Referances/Referances';
import Team from './Team/Team';
const Home = () => {
  return (
    <main id="main">
      <HeroPageBanner />
      {/* <FileringArea/> */}
      <Latest/>
      <WeDo/>
      <Reviews/>
      <Team/>
      <Referances/>
    </main>
  );
};

export default Home;
