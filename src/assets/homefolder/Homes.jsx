import { Box, Container } from "@mui/material";
import Roomwrapper from "../rooms/Roomwrapper";

import HomeContents from "./homecontents/HomeContents";
import Discount from "./discount/Discount";

const Homes = () => {
  return (
    <Box sx={{ marginBottom: "50px", marginTop: "100px" }}>
      {/* <Searchbar /> */}
      <Container>
        {/* <Navbars /> */}
        {/* <Typo /> */}
        <Roomwrapper />
        {/* //////////////////// */}
        <HomeContents />
        <Discount />
      </Container>
    </Box>
  );
};

export default Homes;
