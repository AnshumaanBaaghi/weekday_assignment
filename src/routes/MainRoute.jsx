import React from "react";
import { Route, Routes } from "react-router-dom";
import { JobList } from "../pages/JobList";
import { JobDetails } from "../pages/JobDetails";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/job-details" element={<JobDetails />} />
    </Routes>
  );
};
