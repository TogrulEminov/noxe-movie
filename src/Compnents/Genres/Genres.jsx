import { useSelector } from 'react-redux';
import './Genres.scss';
const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.api);
  const theme  = useSelector((state) => state.mode.theme);
  return (
    <div className="genres" >
      {data?.map((g) => {
        const name = genres[g]?.name;
        if (!name) return;
        return <span data-theme={theme} key={g}>{name}</span>;
      })}
    </div>
  );
};

export default Genres;
