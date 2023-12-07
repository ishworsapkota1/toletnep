import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        style={{
          height: 350,
          position: "relative",
          objectFit: "cover",
        }}
        image="room.jpg"
        title="room"
      />
      {/* <CardContent></CardContent> */}
      {/* <CardActions> */}
      <Box
        sx={{
          position: "absolute",
          mt: "-70px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button size="small">
          {" "}
          <Typography
            sx={{ color: "white", marginLeft: "8px" }}
            fontWeight={600}
          >
            House
          </Typography>{" "}
        </Button>
        <Button size="small">
          <Typography sx={{ color: "white" }}>View</Typography>{" "}
        </Button>
      </Box>
      {/* </CardActions> */}
    </Card>
  );
}
