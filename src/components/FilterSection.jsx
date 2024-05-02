import React, { useState } from "react";
import { MultipleSelect } from "./MultipleSelect";
import { Box } from "@mui/material";
import { SingleSelect } from "./SingleSelect";
const roleOptions = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
  { label: "Option 5" },
];
const noOfEmployeesOptions = [
  { label: "1-10", min: 1, max: 10 },
  { label: "11-20", min: 11, max: 20 },
  { label: "21-50", min: 21, max: 50 },
  { label: "51-100", min: 51, max: 100 },
  { label: "101-200", min: 101, max: 200 },
  { label: "201-500", min: 201, max: 500 },
  { label: "500+", min: 501 },
];
const experienceOptions = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "10" },
];
const RemoteOptions = [
  { label: "Remote" },
  { label: "Hybrid" },
  { label: "In-Office" },
  ,
];
export const FilterSection = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedNoOfEmployees, setSelectedNoOfEmployees] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedRemote, setSelectedRemote] = useState([]);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "end",
      }}
    >
      <MultipleSelect
        options={roleOptions}
        selectedOptions={selectedRoles}
        setSelectedOptions={setSelectedRoles}
        placeholder="Roles"
        label="Roles"
      />
      <MultipleSelect
        options={noOfEmployeesOptions}
        selectedOptions={selectedNoOfEmployees}
        setSelectedOptions={setSelectedNoOfEmployees}
        placeholder="Number Of Employees"
        label="No Of Employees"
      />
      <SingleSelect
        options={experienceOptions}
        selectedOption={selectedExperience}
        setSelectedOption={setSelectedExperience}
        placeholder="Experience"
        label="Experience"
      />
      <MultipleSelect
        options={RemoteOptions}
        selectedOptions={selectedRemote}
        setSelectedOptions={setSelectedRemote}
        placeholder="Remote"
        label="Remote"
      />
    </Box>
  );
};
