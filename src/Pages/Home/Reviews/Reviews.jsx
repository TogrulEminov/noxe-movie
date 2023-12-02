import { Container } from 'react-bootstrap';
import './Reviews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination } from 'swiper';
import steven from '../../../Assets/Images/review-3.webp';
import harley from '../../../Assets/Images/review1.webp';
import ada from '../../../Assets/Images/review-2.webp';
SwiperCore.use([Pagination]);
const Reviews = () => {
  const reviewsSlider = [
    {
      id: 1,
      title: 'Steven Butler',
      desc: 'I had the pleasure of working with Noxe on a recent project and was blown away by their professionalism and creativity. They truly go above and beyond to bring their vision to life and create a final product that exceeds expectations. I highly recommend them for any future projects.',
      img: steven,
    },
    {
      id: 2,
      title: 'Ada Johnson',
      desc: 'I had the pleasure of working with Noxe on a film project, and I can say with complete confidence that their team is incredibly talented and passionate about what they do. They went above and beyond to ensure that every aspect of the project was executed flawlessly.',
      img: ada,
    },
    {
      id: 3,
      title: 'Harley Finkelstein',
      desc: "Noxe has created a masterpiece with their latest movie. The attention to detail, stunning visuals, and captivating storyline had me on the edge of my seat throughout. It's no wonder they continue to win awards for their exceptional filmmaking skills.",
      img: harley,
    },
  ];
  return (
    <section id="reviews">
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={true}
          pagination={{
            el: '#containerForBulletsReviews',
            type: 'bullets',
            bulletClass: 'swiper-custom-bullet',
            bulletActiveClass: 'swiper-custom-bullet-active',
            clickable: true,
          }}
          modules={[Pagination]}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.pagination.destroy();
              swiper.pagination.init();
              swiper.pagination.update();
            });
          }}
          className="reviews_slider">
          {reviewsSlider?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ReviewsCard
                  title={item?.title}
                  desc={item?.desc}
                  img={item?.img}
                />
              </SwiperSlide>
            );
          })}
          <div className="swiper-controls">
            <div id="containerForBulletsReviews"></div>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default Reviews;
