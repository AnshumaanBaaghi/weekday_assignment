import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Chip } from "@mui/material";

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

export const MultipleSelect = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [optionsFiltered, setOptionsFiltered] = React.useState(options);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  console.log("selectedOptions:", selectedOptions);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setInputValue(query);

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
    setOptionsFiltered(filteredOptions);
  };

  const handleSelectChange = (event, newValues) => {
    setSelectedOptions(newValues);
    const updatedOptions = options.filter(
      (option) => !newValues.includes(option)
    );
    setOptionsFiltered(updatedOptions);
  };

  return (
    <Autocomplete
      multiple
      value={selectedOptions}
      onChange={handleSelectChange}
      options={optionsFiltered}
      getOptionLabel={(option) => option}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            className="multipleSelect-chip"
            key={option}
            label={option}
            onDelete={() => {
              const newValues = [...selectedOptions];
              newValues.splice(index, 1);
              handleSelectChange(null, newValues);
            }}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          key={selectedOptions.map((option) => option).join("-")}
        />
      )}
    />
  );
};
