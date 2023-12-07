import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        // aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ backgroundColor: "maroon" }}
        size="small"
      >
        View All
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Room 1</MenuItem>
        <MenuItem onClick={handleClose}>Room 2</MenuItem>
        <MenuItem onClick={handleClose}>Room 3</MenuItem>
        <MenuItem onClick={handleClose}>Room 4</MenuItem>
        <MenuItem onClick={handleClose}>Room 5</MenuItem>
        <MenuItem onClick={handleClose}>Room 6</MenuItem>
        <MenuItem onClick={handleClose}>Room 7</MenuItem>
        <MenuItem onClick={handleClose}>Room 8</MenuItem>
        <MenuItem onClick={handleClose}>Room 9</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownButton;
