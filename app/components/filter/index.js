import React, { useState, useEffect } from "react";
import Select from "react-select";

const MultiSelectFilter = ({ data, columnName, onFilterChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const uniqueValues = Array.from(
      new Set(data.map((item) => item[columnName]))
    ).map((value) => ({ label: value, value }));
    setOptions(uniqueValues);
  }, [data, columnName]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    onFilterChange(selected.map((option) => option.value));
  };

  return (
    <div>
      <Select
        isMulti
        options={options}
        onChange={handleChange}
        value={selectedOptions}
        className="mb-3"
      />
      {selectedOptions.length > 0 && (
        <div className="selected-filters">
          <strong>Selected Filters: </strong>
          {selectedOptions.map((filter) => (
            <span key={filter.value}>{filter.label} </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectFilter;
