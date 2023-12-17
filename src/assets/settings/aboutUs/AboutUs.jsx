import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "#ededed" }}>
      {/* <IconButton sx={{}}> */}
      <Button
        sx={{
          width: "100%",
          justifyContent: "start",
          padding: "20px",
          // borderBottom: "1px solid black",
        }}
      >
        {" "}
        <Typography variant="h5" color={"black"}>
          Cart
        </Typography>{" "}
      </Button>

      {/* </IconButton> */}
    </Box>
  );
};

export default AboutUs;
