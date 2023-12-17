import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import "./Settings.css";
const MyForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data, e.g., send to server
    console.log("Form data submitted:", formData);
  };

  return (
    <Box className="boxer">
      <form
        onSubmit={handleSubmit}
        style={{ marginBottom: "100px", display: "flex" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <div className="helo">
              <label htmlFor="name">
                <h3>Name:</h3>
              </label>
              <input
                type="text"
                placeholder="Enter owner name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="helo">
              <label htmlFor="email">
                <h3>Email:</h3>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="helo">
              <label htmlFor="number">
                <h3>Contact number:</h3>
              </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="enter your number"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <div className="helo">
              <label htmlFor="file">
                <h3>Id proof:</h3>
              </label>
              <input
                type="file"
                id="file"
                name="file"
                value={formData.file}
                onChange={handleInputChange}
                // placeholder=""
                style={{ padding: "20px" }}
              />
            </div>
          </Grid>
        </Grid>
      </form>
      <Button
        type="submit"
        sx={{
          width: "100%",
          backgroundColor: "antiquewhite",
          marginBottom: "100px",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default MyForm;
