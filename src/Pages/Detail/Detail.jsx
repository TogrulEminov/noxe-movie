import LoadingTopBar from '../../Compnents/LoadingTopBar/LoadingTopBar';
import DetailAddition from './DetailAddition/DetailAddition';
import DetailCast from './DetailCast/DetailCast';
import DetailHero from './DetailHero/DetailHero';
import DetailSimilar from './DetailSimilar/DetailSimilar';
import DetailVideo from './DetailVideo/DetailVideo';
import Photos from './Photos/Photos';

const Detail = () => {
  return (
    <>
      <LoadingTopBar />
      <DetailHero />
      <DetailAddition />
      <DetailCast />
      <DetailSimilar />
      <DetailVideo />
      <Photos />
    </>
  );
};

export default Detail;
