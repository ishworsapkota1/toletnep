import { Box, Container, Typography } from "@mui/material";
import Forms from "./Forms";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

const NewKycChild = () => {
  return (
    <Box sx={{ marginTop: "150px" }}>
      <Container>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            KYC details of owner
          </Typography>

          <Typography variant="h7">
            Enter the owner details in the given kyc form
          </Typography>
        </Box>
        {/* --------------------------- */}
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "aliceblue",
            // margin: "100px",
            padding: "10%",
          }}
        >
          <Box
            sx={{
              marginX: "  30%",
              backgroundColor: "white",
              paddingLeft: "10%",
            }}
          >
            <Typography sx={{}}>Owner image*</Typography>
            <a href="">Click</a> anywhere below to choose
            <label htmlFor="photoinput">
              <AddAPhotoOutlinedIcon
                sx={{ color: "gray", fontSize: "200px" }}
              />
            </label>
            <input
              type="file"
              name=""
              id="photoinput"
              style={{ display: "none", visibility: "none" }}
            />
          </Box>
        </Box>
        <Forms />
      </Container>
    </Box>
  );
};

export default NewKycChild;
