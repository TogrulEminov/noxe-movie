import AboutTop from './AboutTop/AboutTop';
import AboutPower from './AboutPower/AboutPower';
import AboutTrailer from './AboutTrailler/AboutTrailer';
import WeDo from './WeDo/WeDo';
import Referances from './Referances/Referances';
import Reviews from './Reviews/Reviews';
import LoadingTopBar from '../../Compnents/LoadingTopBar/LoadingTopBar';
import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';

const About = () => {
  return (
    <>
      <LoadingTopBar />
      <CustomHelmet title="About" />
      <AboutTop />
      <AboutPower />
      <WeDo />
      <Reviews />
      <Referances />
      <AboutTrailer />
    </>
  );
};

export default About;
