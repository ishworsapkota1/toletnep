// import React from "react";
// import Navbars from "../dropdowns/Navbars";
// import Layouts from "../homefolder/Layouts";
import { Box, Container } from "@mui/material";
import NewKyc from "./settingscomponents/editprofile/NewKyc";
import Homes from "../homefolder/Homes";
import AboutUs from "./aboutUs/AboutUs";
import EditProfile from "./editProfile/EditProfile";
import BookingHistory from "./bookingHistory/BookingHistory";
import Help_Contact from "./help_Contact/Help_Contact";
import Terms_Conditions from "./terms_conditions/Terms_Conditions";
import Signout from "./signout/Signout";
import ManageKYC from "./manageKYC/ManageKYC";
import ManageProperty from "./manageProperty/ManageProperty";
const Settings = () => {
  return (
    <Box sx={{ marginTop: "150px", marginBottom: "100px" }}>
      <Container>
        <EditProfile />
        <BookingHistory />
        <Help_Contact />
        <AboutUs />
        <Terms_Conditions />
        <Signout />
        <NewKyc />
        <ManageKYC />
        <ManageProperty />
      </Container>
    </Box>
  );
};

export default Settings;
