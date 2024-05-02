import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Chip } from "@mui/material";

export const MultipleSelect = ({
  options,
  selectedOptions,
  setSelectedOptions,
  placeholder,
  label,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [optionsFiltered, setOptionsFiltered] = React.useState(options);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setInputValue(query);

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
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
    <Box sx={{ minWidth: "200px" }}>
      {selectedOptions?.length > 0 && (
        <Box sx={{ fontWeight: "400", fontSize: "14px" }}>{label}</Box>
      )}
      <Autocomplete
        multiple
        value={selectedOptions}
        onChange={handleSelectChange}
        options={optionsFiltered}
        getOptionLabel={(option) => option.label}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              className="multipleSelect-chip"
              key={option.label}
              label={option.label}
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
            placeholder={selectedOptions?.length == 0 ? placeholder : ""}
            key={selectedOptions.map((option) => option.label).join("-")}
          />
        )}
      />
    </Box>
  );
};
