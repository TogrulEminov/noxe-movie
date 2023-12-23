import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./GenresDropdown.scss"
import { useState } from 'react';
const GenresDropdown = ({ genres, setGenres, genres_name }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setGenres(event.target.value);
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
        <InputLabel id="demo-controlled-open-select-label">Gen</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={genres}
          label="Age"
          onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {genres?.map((item) => {
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

export default GenresDropdown;
