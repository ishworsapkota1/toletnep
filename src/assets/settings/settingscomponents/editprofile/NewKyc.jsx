import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import NewkycChild from "./NewKycChild";

const EditProfile = () => {
  return (
    <Box sx={{ backgroundColor: "#ededed" }}>
      {/* <IconButton sx={{}}> */}
      <Link to="/newkycchild">
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
            New kyc
          </Typography>{" "}
        </Button>
      </Link>

      {/* </IconButton> */}
    </Box>
  );
};

export default EditProfile;
