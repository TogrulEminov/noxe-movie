import LoadingTopBar from '../../Compnents/LoadingTopBar/LoadingTopBar';
import DetailAddition from './DetailAddition/DetailAddition';
import DetailCast from './DetailCast/DetailCast';
import DetailHero from './DetailHero/DetailHero';
import Photos from './Photos/Photos';

const Detail = () => {
  return (
    <>
      <LoadingTopBar />
      <DetailHero />
      <DetailAddition />
      <DetailCast />
      <Photos/>
    </>
  );
};

export default Detail;
