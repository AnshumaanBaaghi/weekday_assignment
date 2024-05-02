import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobList } from "../redux/actions";
import { FilterSection } from "../components/FilterSection";
import { JobCard } from "../components/JobCard";
export const JobList = () => {
  const state = useSelector((state) => state);
  console.log("state:", state);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobList());
  }, []);
  return (
    <div>
      <FilterSection />
      <div className="jobList">
        <JobCard />
        <JobCard referal={true} />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};
