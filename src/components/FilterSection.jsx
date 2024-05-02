import React, { useState } from "react";
import { MultipleSelect } from "./MultipleSelect";
import { Box, TextField } from "@mui/material";
import { SingleSelect } from "./SingleSelect";
const roleOptions = [
  { label: "frontend" },
  { label: "ios" },
  { label: "android" },
  { label: "tech lead" },
  { label: "backend" },
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
const remoteOptions = [
  { label: "Remote" },
  { label: "Hybrid" },
  { label: "In-Office" },
  ,
];
const minSalaryOptions = [
  { label: "0L" },
  { label: "10L" },
  { label: "20L" },
  { label: "30L" },
  { label: "40L" },
  { label: "50L" },
  { label: "60L" },
  { label: "70L" },
  ,
];
export const FilterSection = ({
  selectedRoles,
  setSelectedRoles,
  selectedNoOfEmployees,
  setSelectedNoOfEmployees,
  selectedExperience,
  setSelectedExperience,
  selectedRemote,
  setSelectedRemote,
  selectedMinSalary,
  setSelectedMinSalary,
  query,
  setQuery,
}) => {
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
        options={remoteOptions}
        selectedOptions={selectedRemote}
        setSelectedOptions={setSelectedRemote}
        placeholder="Remote"
        label="Remote"
      />
      <SingleSelect
        options={minSalaryOptions}
        selectedOption={selectedMinSalary}
        setSelectedOption={setSelectedMinSalary}
        placeholder="Minimum Base Pay Salary"
        label="Min Base Pay"
      />
      <TextField
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Company Name"
      />
    </Box>
  );
};
