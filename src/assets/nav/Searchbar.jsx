import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { styled } from "@mui/system";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import "./Searchbar.css";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "50%",
    margin: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  //   backgroundColor: "pink",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "38ch",
      "&:focus": {
        width: "38ch",
      },
    },
  },
}));
export default function Navbar() {
  return (
    <div>
      <Search className="search_class">
        <SearchIconWrapper sx={{ position: "relative", display: "flex" }}>
          <CameraAltOutlinedIcon sx={{ color: "gray" }} />
        </SearchIconWrapper>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "gray" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search here by property address/code..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </div>
  );
}
