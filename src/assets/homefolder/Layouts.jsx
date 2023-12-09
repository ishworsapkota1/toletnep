import { Box, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

const Layouts = () => {
  return (
    <Box>
      <Box style={{ backgroundColor: "aliceblue", bottom: "auto" }}>
        {" "}
        <Link to="/">
          <IconButton
            className="iconer"
            sx={{
              marginLeft: "300px",
            }}
          >
            <HomeIcon /> Home
          </IconButton>
        </Link>
        <Link to="/wishlist">
          <IconButton sx={{ marginLeft: "300px" }}>
            <NotificationsIcon /> Wishlist
          </IconButton>
        </Link>
        <Link to="/settings">
          <IconButton sx={{ marginLeft: "300px" }}>
            <SettingsIcon /> Settings
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Layouts;
