import React from "react";
import Navbars from "../dropdowns/Navbars";
import Layouts from "../homefolder/Layouts";
import { Box } from "@mui/material";
import Searchbar from "../nav/Searchbar";

const Settings = () => {
  return (
    <Box>
      <Searchbar />
      <Navbars />
      <Box sx={{ height: "76vh" }}></Box>
      <Layouts />
    </Box>
  );
};

export default Settings;
