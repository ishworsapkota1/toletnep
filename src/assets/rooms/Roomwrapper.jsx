import Viewrooms from "./Viewrooms";
import { Box, Typography } from "@mui/material";
import Viewall from "./Viewall";

const Roomwrapper = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Box>
          {" "}
          <Typography variant="h6">View rooms</Typography>{" "}
        </Box>
        <Box>
          {" "}
          <Viewall />
        </Box>
      </Box>
      <Viewrooms />
    </Box>
  );
};

export default Roomwrapper;
