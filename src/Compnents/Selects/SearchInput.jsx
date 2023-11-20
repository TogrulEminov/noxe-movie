import React from 'react';

const SearchInput = () => {
  return (
    <div>
      <datalist id="browsers">
        <option value="Edge">Edge</option>
        <option value="Firefox">Firefox</option>
        <option value="Chrome">Chrome</option>
        <option value="Opera">Opera</option>
        <option value="Safari">Safari</option>
      </datalist>
    </div>
  );
};

export default SearchInput;
