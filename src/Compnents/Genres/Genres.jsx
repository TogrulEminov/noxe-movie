import { useSelector } from 'react-redux';
import './Genres.scss';
const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.api);
  return (
    <ul className="genres">
      {data?.map((g) => {
        const name = genres[g]?.name;
        if (!name) return;
        return <li key={g}>{name}</li>;
      })}
    </ul>
  );
};

export default Genres;
