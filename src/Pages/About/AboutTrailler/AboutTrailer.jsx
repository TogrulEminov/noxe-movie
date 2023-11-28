import './AboutTrailer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
const AboutTrailer = () => {
  
  const queryparams = {
    apikey: "84677991",
    s: "genre",
    type: "movie",
    action: "opensearch",
  };
  const { data, loading } = useFetch(queryparams);
  console.log(data);
  return (
    <>
      <section id="about-trailler">
        <Row className="about-trailler">
          {data?.Search?.map((item)=>{
            return (
              <Col className="col" xs={12} md={6} key={item?.imdbID}>
              <div className="trailler_card">
                <img src={item?.Poster} alt="" />
                <div className="text">
                  <div className="content">
                    <h1>{item?.Title}</h1>
                    <p>{item?.Year}</p>
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
