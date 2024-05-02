import { getJobList } from "../api";

export const FETCHJOBLIST = "FETCHJOBLIST";
export const ISLOADING = "ISLOADING";
export const UPDATEOFFSET = "UPDATEOFFSET";

export const fetchJobList = (offset) => {
  return async (dispatch) => {
    dispatch({ type: ISLOADING, payload: true });
    try {
      const res = await getJobList(offset);
      const data = await res.json();
      const totalPages = Math.ceil(data.totalCount / 10);
      dispatch({ type: FETCHJOBLIST, payload: data.jdList });
      dispatch({ type: UPDATEOFFSET, payload: totalPages - 1 });
      dispatch({ type: ISLOADING, payload: false });
    } catch (error) {
      console.log("error:", error);
    }
  };
};
