import { Button } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  console.log("state:", state);
  return (
    <div>
      <Button variant="contained">Contained</Button>
    </div>
  );
}

export default App;
