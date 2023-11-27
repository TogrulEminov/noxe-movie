import { Container, Row } from 'react-bootstrap';
import './FileringArea.scss';
import FilmCard from '../../../Compnents/FilmCard/FilmCard';
import useFetch from '../../../hooks/useFetch';
const FileringArea = () => {
  const { data, loading } = useFetch('/movie/popular');
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
              {data?.results?.map((e) => {
                return (
                  <FilmCard key={e.id} title={e.original_title} img={`https://image.tmdb.org/t/p/original/${e.poster_path}`} />
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
