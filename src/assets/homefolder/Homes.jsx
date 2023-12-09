import { Box, Container, Grid } from "@mui/material";
import Roomwrapper from "../rooms/Roomwrapper";
import Searchbar from "../nav/Searchbar";
import Navbars from "../dropdowns/Navbars";
import Layouts from "./Layouts";
import HomeContents from "./homecontents/HomeContents";

const Homes = () => {
  return (
    <Box>
      <Searchbar />
      <Container>
        <Navbars />
        {/* <Typo /> */}
        <Roomwrapper />
        {/* //////////////////// */}
        <HomeContents />
        {/* /////////////////////////// */}
      </Container>
      <Box sx={{ marginTop: "5%" }}>{/* <Layouts /> */}</Box>
    </Box>
  );
};

export default Homes;
