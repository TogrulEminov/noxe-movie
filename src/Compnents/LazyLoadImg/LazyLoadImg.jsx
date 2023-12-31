import "./LazyLoadImage.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const LazyLoadImg = ({ src, className, alt, width, height }) => {
  return (
    <LazyLoadImage className={className || ''}
    effect="blur"
    src={src}
    alt={alt}
    width={width}
    height={height}
    />
  )
}

export default LazyLoadImg