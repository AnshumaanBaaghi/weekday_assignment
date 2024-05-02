import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobList } from "../redux/actions";
import { FilterSection } from "../components/FilterSection";
import { JobCard } from "../components/JobCard";
export const JobList = () => {
  const jobListArr = useSelector((state) => state.jobList);
  console.log("jobListArr:", jobListArr);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobList());
  }, []);
  return (
    <div>
      <FilterSection />
      <div className="jobList">
        {!isLoading &&
          jobListArr &&
          jobListArr.length &&
          jobListArr.map((el, i) => (
            <JobCard key={el.jdUid} el={el} referal={i % 5 == 1} /> // Randomly passing referal for showing referal button
          ))}
      </div>
    </div>
  );
};
