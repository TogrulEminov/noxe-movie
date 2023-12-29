import Container from 'react-bootstrap/Container';
import CloseIcon from '@mui/icons-material/Close';
import './SearchHeader.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeSearch } from '../../../Redux/Control/HeaderSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchHeader = () => {
  const { search } = useSelector((state) => state.header);
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const searchQueryHandler = (event) => {
    event.preventDefault();
    if (!query) return;
    const queryParams = new URLSearchParams();
    queryParams.set('query', query);

    const mediaType = 'movie';
    navigate(`/search/${mediaType}?${queryParams.toString()}`);
    dispatch(closeSearch());
  };
  const dispatch = useDispatch();
  const handleCloseSearch = () => {
    dispatch(closeSearch());
  };
  return (
    <div className={`search-header ${search ? 'search_header_active' : ''}`}>
      <Container>
        <div className="search_header_wrapper">
          <button className="close_icon" onClick={handleCloseSearch}>
            <CloseIcon />
          </button>
          <div className="input_fields">
            <form onSubmit={(event) => searchQueryHandler(event)}>
              <input
                type="text"
                placeholder="Type here to search."
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="modal_underline"></span>
              <button>Send</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchHeader;
