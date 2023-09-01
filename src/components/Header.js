import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "52ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "gray" }}>
      <AppBar position="static" sx={{ backgroundColor: "gray" }}>
        <Toolbar>

         <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontStyle: "italic", 
              fontWeight: "bold", 
            }}
          >
           <Link to="/" style={{ textDecoration: "none" ,color:"white"}}>WOOKIE <br /> MOVIES</Link>  
          </Typography>
          <Link to="/myDesign" style={{ textDecoration: "none" }}>
  <Typography
    sx={{
      backgroundColor: "#f2f2f2",
      color: "black",
      fontStyle: "italic",
      fontWeight: "bold",
      borderRadius: "30px",
      padding: "2px",
      '@media (max-width: 600px)': {
        fontSize: '14px',  
        padding: '5px 10px', 
      },
      '@media (min-width: 601px) and (max-width: 1024px)': {
        fontSize: '18px', 
        padding: '8px 12px', 
      },
    }}
  >
    my custom design
  </Typography>
</Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
