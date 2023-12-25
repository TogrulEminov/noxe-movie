import { Select } from 'antd';
import './GenresDropdown.scss';
import { useSelector } from 'react-redux';
const GenresDropdown = ({ setAdults }) => {
  const theme = useSelector((state) => state.mode.theme);
  const handleChange = (value) => {
    setAdults(value);
  };

  return (
    <Select
      data-theme={theme}
      labelInValue
      defaultValue={{
        value: 'Adult',
        label: 'Adult',
      }}
      onChange={handleChange}
      options={[
        {
          value: 'true',
          label: 'true',
        },
        {
          value: 'false',
          label: 'false',
        },
      ]}
    />
  );
};

export default GenresDropdown;
