import HeroPageBanner from './HeroBanner/HeroPageBanner';
import FileringArea from './FileringArea/FileringArea';
import Latest from './Latest/Latest';
import WeDo from './WeDo/WeDo';
const Home = () => {
  return (
    <main id="main">
      <HeroPageBanner />
      <FileringArea/>
      <Latest/>
      <WeDo/>
    </main>
  );
};

export default Home;
