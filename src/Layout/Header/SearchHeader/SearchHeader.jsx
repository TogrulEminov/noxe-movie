import Container from 'react-bootstrap/Container';
import CloseIcon from '@mui/icons-material/Close';
import './SearchHeader.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeSearch } from '../../../Redux/Control/HeaderSlice';
const SearchHeader = () => {
  const { search } = useSelector((state) => state.header);
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
            <form>
              <input type="text" placeholder="Type here to search." />
              <span className="modal_underline"></span>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchHeader;
