import { FETCHJOBLIST, ISLOADING, UPDATEOFFSET } from "./actions";

const initialState = {
  isLoading: false,
  jobList: [],
  jobDetails: {},
  totalOffset: 0,
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHJOBLIST:
      return { ...state, jobList: [...state.jobList, ...payload] };
    case ISLOADING:
      return { ...state, isLoading: payload };
    case UPDATEOFFSET:
      return { ...state, totalOffset: payload };

    default:
      return state;
  }
};
