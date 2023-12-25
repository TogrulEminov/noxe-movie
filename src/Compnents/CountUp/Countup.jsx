import { useSelector } from 'react-redux';
import './Countup.scss';
import CountUp from 'react-countup';
const Countup = ({ count, type }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="count_up" data-theme={theme}>
      <h3>
        <CountUp end={count} duration={100} />
      </h3>
      <h6>{type}</h6>
    </div>
  );
};

export default Countup;
