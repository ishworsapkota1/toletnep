import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        style={{
          height: 350,
          position: "relative",
          objectFit: "cover",
        }}
        image={props.image}
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
        <Button
          size="small"
          sx={{ backgroundColor: "#f0f8ff57;", marginLeft: "10px" }}
        >
          {" "}
          <Typography
            sx={{
              color: "white",
            }}
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
