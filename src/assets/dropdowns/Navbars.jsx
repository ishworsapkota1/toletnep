import "./Navbars.css";
import Dropdowns from "./Dropdowns";
import { Box } from "@mui/material";
import NavLists from "./NavLists";
import Layouts from "../homefolder/Layouts";
// import Searchbar from "../nav/Searchbar";
const Navbars = () => {
  return (
    <>
      {/* <Searchbar /> */}

      <Box
        style={{
          // backgroundColor: "pink",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Dropdowns />
        <NavLists />
      </Box>
    </>
  );
};

export default Navbars;
