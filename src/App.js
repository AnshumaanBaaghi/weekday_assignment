import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobList } from "./redux/actions";
import { MainRoute } from "./routes/MainRoute.jsx";

function App() {
  const state = useSelector((state) => state);
  console.log("state:", state);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobList());
  }, []);
  return (
    <>
      <MainRoute />
    </>
  );
}

export default App;
