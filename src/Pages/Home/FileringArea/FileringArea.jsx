import { Container, Row } from 'react-bootstrap';
import './FileringArea.scss';
import FilmCard from '../../../Compnents/FilmCard/FilmCard';
import useFetch from '../../../hooks/useFetch';
const FileringArea = () => {
  const queryparams = {
    i: "tt3896198",
    apikey: "84677991",
    s: "Red",
    type: "movie",
  };
  const { data, loading } = useFetch(queryparams);
  return (
    <section id="filtering_section">
      <Container>
        <div className="filter_input">
          <Row></Row>
        </div>
        <Row>
          {loading ? (
            <p>loading...</p>
          ) : (
            <>
              {data?.Search?.map((e) => {
                return (
                  <FilmCard key={e.imdbID} title={e.Title} img={e.Poster}/>
                );
              })}
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default FileringArea;
