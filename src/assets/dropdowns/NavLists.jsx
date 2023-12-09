// import { Box } from "@mui/material";
// import "./Navbars.css";

// import { useState } from "react";

// const Navbar = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <Box className="navs" sx={{ marginRight: "30%" }}>
//       <ul style={{ display: "flex", gap: "50px", fontSize: "25px" }}>
//         <li
//           onClick={() => handleItemClick("Home")}
//           style={{ textDecoration: "none" }}
//         >
//           Home
//         </li>
//         <li onClick={() => handleItemClick("About")}>About</li>
//         <li onClick={() => handleItemClick("Contact")}>Contact</li>
//       </ul>

//       {selectedItem && (
//         <div>
//           <h2>{selectedItem} </h2>
//           <ul>
//             {/* Replace the following with the actual content for each list */}
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//           </ul>
//         </div>
//       )}
//     </Box>
//   );
// };

// export default Navbar;
import { IconButton } from "@mui/material";
import "./Dropdowns.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
        </li>
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
