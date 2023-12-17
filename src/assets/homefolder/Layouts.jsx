import { Box, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

const Layouts = () => {
  return (
    <Box
      style={{
        backgroundColor: "aliceblue",
        width: "100%",
        justifyContent: "center",
        display: "flex",
        gap: "150px",
        position: "fixed",
        bottom: "0",
        marginTop: "auto",
      }}
    >
      <Box>
        <Link to="/">
          <IconButton className="iconer" sx={{}}>
            <HomeIcon /> Home
          </IconButton>
        </Link>
      </Box>
      <Box>
        <Link to="/wishlist">
          <IconButton sx={{}}>
            <NotificationsIcon /> Wishlist
          </IconButton>
        </Link>
      </Box>
      <Box>
        <Link to="/settings">
          <IconButton sx={{}}>
            <SettingsIcon /> Settings
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Layouts;
