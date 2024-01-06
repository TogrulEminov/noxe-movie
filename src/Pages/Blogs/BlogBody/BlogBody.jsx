import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogCard from '../../../Compnents/BlogCard/BlogCard';
import './BlogBody.scss';
import { useSelector } from 'react-redux';
import BlogsMovie from '../../../Compnents/BlogsMovie/BlogsMovie';
import useFetch from '../../../hooks/useFetch';
import noBlogImg from '../../../Assets/Images/default-blog.png';
import noImage from '../../../Assets/Images/no-poster.png';
const BlogBody = ({ blog }) => {
  const theme = useSelector((state) => state.mode.theme);
  const { url } = useSelector((state) => state.api);
  const { data: movie } = useFetch(`/movie/now_playing?language=en-US&page=6`);

  return (
    <section id="blog_body" data-theme={theme}>
      <Container>
        <div className="blog_body_wrapper">
          <div className="blog_left_side">
            <Row>
              {blog?.articles?.slice(10, 30)?.map((item, index) => {
                const image = item?.urlToImage ? item?.urlToImage : noBlogImg;
                const currentDate = new Date();
                const publishedAtDate = item?.publishedAt
                  ? new Date(item.publishedAt)
                  : null;
                const yearsDifference =
                  currentDate.getFullYear() - publishedAtDate.getFullYear();
                const monthsDifference =
                  yearsDifference * 12 +
                  (currentDate.getMonth() - publishedAtDate.getMonth());

                return (
                  <BlogCard
                    to={item?.url}
                    key={index}
                    src={image}
                    title={item?.title}
                    author={item?.author}
                    description={item?.description}
                    source={item?.source.name}
                    publishedAt={monthsDifference.toFixed(0)}
                  />
                );
              })}
            </Row>
          </div>
          <div className="blog_right_side">
            <div className="blog_about">
              <div className="blog_right_title">
                <h3>About me</h3>
              </div>
              <div className="blog_about_images">
                <figure>
                  <img
                    src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/Ellipse-1.png"
                    alt=""
                  />
                </figure>
                <article>
                  <h3>Theresa Jordan</h3>
                  <p>
                    Meet Theresa Jordan, the talented editor behind Noxe’s
                    cinematic magic. With a keen eye for detail and a passion
                    for storytelling, Theresa brings every scene to life with
                    her artistic vision. Join us in celebrating her
                    contributions to our films and the magic she creates.
                  </p>
                </article>
              </div>
            </div>
            <div className="blog_recent_movies">
              <div className="blog_right_title">
                <h3>Movies & TV </h3>
              </div>
              <Row>
                {movie?.results?.slice(0, 10)?.map((item) => {
                  let image = item?.poster_path
                    ? `${url.poster}/${item?.poster_path}`
                    : noImage;
                  return (
                    <BlogsMovie
                      key={item.id}
                      id={item?.id}
                      genres_ids={item?.genre_ids}
                      title={item?.title}
                      stars={item?.vote_average}
                      src={image}
                    />
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogBody;
