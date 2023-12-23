import './SearchMT.scss';
import SearchIcon from '@mui/icons-material/Search';
const SearchMT = ({ type, list, handleListChange }) => {
  return (
    <div className="movies_tv_search">
      <button>
        <SearchIcon />
      </button>
      <input
        type="text"
        value={list}
        onChange={handleListChange}
        placeholder={`Find  ${type} documentary and more...`}
      />
    </div>
  );
};

export default SearchMT;
