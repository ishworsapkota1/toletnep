import "./App.css";
import Navbar from "./assets/nav/Navbar";
import Dropdowns from "./assets/dropdowns/Dropdowns";
import { Container } from "@mui/material";
// import TandL from "./assets/typo_and_location/TandL";
import Typo from "./assets/typo_and_location/Typo";
import Roomwrapper from "./assets/rooms/Roomwrapper";
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Dropdowns />
        {/* <TandL /> */}
        <Typo />
        <Roomwrapper />
      </Container>
    </>
  );
}

export default App;
