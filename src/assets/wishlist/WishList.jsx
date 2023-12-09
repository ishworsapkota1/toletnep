import { Box } from "@mui/material";
import Navbars from "../dropdowns/Navbars";
import Layouts from "../homefolder/Layouts";
import Searchbar from "../nav/Searchbar";

const WishList = () => {
  return (
    <Box>
      <Searchbar />
      <Navbars />
      <Box sx={{ height: "76vh" }}></Box>
      <Layouts></Layouts>
    </Box>
  );
};

export default WishList;
