import { useSelector } from 'react-redux';
import './TypeCounShow.scss';
const TypeCounShow = ({ type, total }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="type_count" data-theme={theme}>
      <h3>Search {type}</h3>
      <h6>Total {total} titles</h6>
    </div>
  );
};

export default TypeCounShow;
