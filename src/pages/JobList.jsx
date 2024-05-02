import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobList } from "../redux/actions";
import { FilterSection } from "../components/FilterSection";
import { JobCard } from "../components/JobCard";
export const JobList = () => {
  const jobListArr = useSelector((state) => state.jobList);
  const isLoading = useSelector((state) => state.isLoading);
  const totalOffset = useSelector((state) => state.totalOffset);

  const totalOffsetRef = useRef(null);
  totalOffsetRef.current = totalOffset;
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();

  const handleScroll = () => {
    const entireDocumentHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrolled = document.documentElement.scrollTop;
    if (
      offset < totalOffsetRef.current &&
      !isLoading &&
      scrolled + viewHeight + 1 >= entireDocumentHeight
    ) {
      setOffset((pre) => pre + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchJobList(offset));
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <FilterSection />
      <div className="jobList">
        {jobListArr?.length > 0 &&
          jobListArr.map((el, i) => (
            <JobCard key={i} el={el} referal={i % 5 == 1} /> // Randomly passing referal for showing referal button
          ))}
      </div>
      {isLoading && <>Loading...</>}
    </div>
  );
};
