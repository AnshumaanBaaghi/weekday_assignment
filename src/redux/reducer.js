import { FETCHJOBLIST, ISLOADING } from "./actions";

const initialState = {
  isLoading: false,
  jobList: [],
  jobDetails: {},
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHJOBLIST:
      return { ...state, jobList: [...state.jobList, ...payload] };
    case ISLOADING:
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};
