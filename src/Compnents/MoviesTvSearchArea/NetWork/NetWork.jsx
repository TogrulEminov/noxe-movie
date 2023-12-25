import { Select } from 'antd';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';

const NetWork = ({ setRegion }) => {
  const theme = useSelector((state) => state.mode.theme);
  const handleChange = (event) => {
    setRegion(event);
  };
  const { data } = useFetch('/watch/providers/regions?');
  return (
    <div>
      <Select
        data-theme={theme}
        labelInValue
        defaultValue={{
          value: 'Region',
          label: 'Region',
        }}
        onChange={handleChange}
        options={data?.results?.map((item) => ({
          value: item?.native_name,
          label: item?.native_name,
          key: item?.iso_3166_1.toString(),
          title: item?.native_name,
        }))}
      />
    </div>
  );
};

export default NetWork;
