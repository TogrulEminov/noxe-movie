import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
const NetWork = ({ network, setNetwork }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setNetwork(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-controlled-open-select-label"> Net </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={network}
          label="Age"
          onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {network?.map((item) => {
          <MenuItem key={item?.id} value={10}>
           {genres_name}
          </MenuItem>;
        })} */}
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default NetWork;
