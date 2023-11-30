const ReviewsCard = ({ title, desc, img }) => {
  return (
    <div className="reviews_card">
      <figure className="reviews_image">
        <img src={img} alt={title} />
      </figure>
      <article className="reviews_heading">
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
    </div>
  );
};

export default ReviewsCard;
