import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobList } from "../redux/actions";
import { FilterSection } from "../components/FilterSection";
import { JobCard } from "../components/JobCard";
export const JobList = () => {
  const jobListArr = useSelector((state) => state.jobList);
  console.log("jobListArr:", jobListArr);
  const isLoading = useSelector((state) => state.isLoading);
  const totalOffset = useSelector((state) => state.totalOffset);
  const dispatch = useDispatch();

  const totalOffsetRef = useRef(null);
  totalOffsetRef.current = totalOffset;
  const [offset, setOffset] = useState(0);

  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedNoOfEmployees, setSelectedNoOfEmployees] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedRemote, setSelectedRemote] = useState([]);
  const [selectedMinSalary, setSelectedMinSalary] = useState(null);
  const [query, setQuery] = useState("");

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

  const filterArray = (arr) => {
    // Right now, we're filtering data directly through the frontend to keep things simple. But going forward, we'll switch to using queries with backend APIs for better filtering. Just wanted to give you a heads-up!

    let filteredArr = [...arr];

    // Filtering data Based on Search Query
    if (query) {
      /* Commeting this code cause Company Name is not provided in the data

      let searchPattern = new RegExp("\\w*" + query + "\\w*", "i");
      filteredArr = filteredArr.filter((el) =>
      searchPattern.test(el.companyName)
      );
      */
    }

    // Filtering Based on Selected Roles
    if (selectedRoles?.length) {
      filteredArr = filteredArr.filter((el) => {
        return selectedRoles.some(
          (option) => option.label.toLowerCase() === el.jobRole.toLowerCase()
        );
      });
    }

    // Filtering Based on Number Of Employees
    if (selectedNoOfEmployees?.length) {
      /* Commeting this code cause Number Of Employee is not provided in the data
      filteredArr = filteredArr.filter((el) => {
        return selectedRoles.some(
          (option) =>
            option.min <= el.minEmployees &&
            (option.max ? option.max >= el.maxEmployees : true)
        );
      });
      */
    }

    // Filtering based on Experience
    if (selectedExperience) {
      filteredArr = filteredArr.filter((el) =>
        el.minExp
          ? el.minExp <= +selectedExperience.label
          : 1 <= +selectedExperience.label
      );
    }

    // Filtering based on location
    if (selectedRemote?.length) {
      filteredArr = filteredArr.filter((el) =>
        selectedRemote.some((option) => {
          if (option.label == "Hybrid") return true;
          else if (option.label == "Remote") return el.location === "remote";
          else if (option.label == "In-Office") return el.location !== "remote";
        })
      );
    }

    // Filtering based Salary
    if (selectedMinSalary) {
      const selectedVal = +selectedMinSalary.label.substring(
        0,
        selectedMinSalary.label.length - 1
      );
      filteredArr = filteredArr.filter((el) =>
        el.minJdSalary ? el.minJdSalary >= selectedVal : 0 >= selectedVal
      );
    }
    return filteredArr;
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
      <FilterSection
        selectedRoles={selectedRoles}
        setSelectedRoles={setSelectedRoles}
        selectedNoOfEmployees={selectedNoOfEmployees}
        setSelectedNoOfEmployees={setSelectedNoOfEmployees}
        selectedExperience={selectedExperience}
        setSelectedExperience={setSelectedExperience}
        selectedRemote={selectedRemote}
        setSelectedRemote={setSelectedRemote}
        selectedMinSalary={selectedMinSalary}
        setSelectedMinSalary={setSelectedMinSalary}
        query={query}
        setQuery={setQuery}
      />
      <div className="jobList">
        {jobListArr?.length > 0 &&
          filterArray(jobListArr).map((el, i) => (
            <JobCard key={i} el={el} referal={i % 5 == 1} /> // Randomly passing referal for showing referal button
          ))}
      </div>
      {isLoading && <>Loading...</>}
    </div>
  );
};
