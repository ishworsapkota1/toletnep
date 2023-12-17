import { IconButton } from "@mui/material";
import "./Dropdowns.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          HomePage{" "}
          <IconButton>
            {" "}
            <ArrowDropDownIcon />{" "}
          </IconButton>{" "}
        </li>
        <li>
          Contact{" "}
          <IconButton>
            {" "}
            <ArrowDropDownIcon />{" "}
          </IconButton>
        </li>
        <li>
          Blog{" "}
          <IconButton>
            {" "}
            <ArrowDropDownIcon />{" "}
          </IconButton>
        </li>
        <li>
          Rooms{" "}
          <IconButton>
            {" "}
            <ArrowDropDownIcon />{" "}
          </IconButton>
        </li>{" "}
        <li>
          Offices{" "}
          <IconButton>
            {" "}
            <ArrowDropDownIcon />{" "}
          </IconButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
