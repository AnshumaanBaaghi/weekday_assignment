import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobList } from "./redux/actions";

function App() {
  const state = useSelector((state) => state);
  console.log("state:", state);
  const isLoading = useSelector((state) => state.isLoading);
  console.log("isLoading:", isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobList());
  }, []);
  return (
    <div>
      <Button variant="contained">Contained</Button>
    </div>
  );
}

export default App;
