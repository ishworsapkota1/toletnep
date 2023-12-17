import "./Navbars.css";
import Dropdowns from "./Dropdowns";
import { Box, Container, containerClasses } from "@mui/material";
import NavLists from "./NavLists";
import Layouts from "../homefolder/Layouts";
import Searchbar from "../nav/Searchbar";
const Navbars = () => {
  return (
    <Box
      // className="container"
      sx={{
        width: "100%",
        position: "fixed",
        top: "0px",
        zIndex: "2",
        backgroundColor: "white",
        // margin: "auto",
      }}
    >
      <Searchbar />

      <Box
        style={{
          // backgroundColor: "pink",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="container"
      >
        <Dropdowns />
        <NavLists />
      </Box>
    </Box>
  );
};

export default Navbars;
