import './AboutTrailer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const AboutTrailer = () => {
  
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
  const { data } = useFetch('/trending/movie/day?language=en-US');
  console.log(data);
  return (
    <>
      <section id="about-trailler">
        <Row className="about-trailler">
          {data?.slice(0,3)
          .map((item)=>{
            return (
              <Col className="col" xs={12} md={6} key={item?.imdbID}>
              <div className="trailler_card">
              <img src={`${IMAGE_PATH}${item.poster_path}`} alt="poster" />
                <div className="text">
                  <div className="content">
                    <h1>{item.title}</h1>
                    <p>{item.overview}</p>
                  </div>
                </div>
                <div className="watch_trailler">
                  <Link to="" >
                    Watch the Trailer
                  </Link>
                </div>
              </div>
            </Col>
            )
          })}
         
         
        </Row>
      </section>
    </>
  );
};

export default AboutTrailer;
