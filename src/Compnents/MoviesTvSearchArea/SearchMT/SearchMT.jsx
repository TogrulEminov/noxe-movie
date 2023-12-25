import { useSelector } from 'react-redux';
import './SearchMT.scss';
import SearchIcon from '@mui/icons-material/Search';
const SearchMT = ({ type, query, handleSearchChange }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="movies_tv_search" data-theme={theme}>
      <button>
        <SearchIcon />
      </button>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder={`Find  ${type} documentary and more...`}
      />
    </div>
  );
};

export default SearchMT;
