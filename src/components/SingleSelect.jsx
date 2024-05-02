import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const options = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
  { label: "Option 5" },
];

export const SingleSelect = ({
  options,
  label,
  selectedOption,
  setSelectedOption,
  placeholder,
}) => {
  return (
    <Box sx={{ minWidth: "200px" }}>
      {selectedOption && (
        <Box sx={{ fontWeight: "400", fontSize: "14px" }}>{label}</Box>
      )}
      <Autocomplete
        value={selectedOption}
        onChange={(event, newValue) => {
          setSelectedOption(newValue);
        }}
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} variant="outlined" />
        )}
      />
    </Box>
  );
};
