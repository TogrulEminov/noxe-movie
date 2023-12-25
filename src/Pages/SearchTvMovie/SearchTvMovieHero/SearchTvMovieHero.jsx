import { useLocation } from 'react-router-dom';
import './SearchTvMovieHero.scss';
const SearchTvMovieHero = ({ background }) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query');
  return (
    <section
      id="search_tv_mode_banner"
      style={{ background: `url(${background})` }}>
      <div className="containr">
        <h3 className="section_title">
          Search result:<span>"{query}"</span>{' '}
        </h3>
      </div>
    </section>
  );
};

export default SearchTvMovieHero;
