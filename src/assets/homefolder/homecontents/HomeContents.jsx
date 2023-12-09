import { Box, Button, Card, Grid, IconButton, Typography } from "@mui/material";
import Homecards from "./Homecards";

const HomeContents = (props) => {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Grid container gap={11}>
        <Grid item xs={2.3}>
          <Homecards images={"room.jpg"} />
          {/*  */}
        </Grid>
        <Grid item xs={2.3}>
          <Homecards images={"room1.jpg"} />
          {/*  */}
        </Grid>
        <Grid item xs={2.3}>
          <Homecards images={"room2.0.jpg"} />
          {/*  */}
        </Grid>
        <Grid item xs={2.3}>
          <Homecards images={"room3.png"} />
          {/*  */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeContents;
