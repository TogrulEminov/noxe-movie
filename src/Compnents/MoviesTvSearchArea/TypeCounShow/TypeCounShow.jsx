import './TypeCounShow.scss';
const TypeCounShow = ({ type, total }) => {
  return (
    <div className="type_count">
      <h3>Search {type}</h3>
      <h6>Total {total} titles</h6>
    </div>
  );
};

export default TypeCounShow;
