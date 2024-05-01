import { getJobList } from "../api";

export const FETCHJOBLIST = "FETCHJOBLIST";
export const ISLOADING = "ISLOADING";

export const fetchJobList = () => {
  return async (dispatch) => {
    dispatch({ type: ISLOADING, payload: true });
    try {
      const res = await getJobList();
      const data = await res.json();
      console.log("data:", data);
      dispatch({ type: FETCHJOBLIST, payload: data.jdList });
      dispatch({ type: ISLOADING, payload: false });
    } catch (error) {
      console.log("error:", error);
    }
  };
};
