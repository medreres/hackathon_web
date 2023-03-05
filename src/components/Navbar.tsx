import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, MenuItem, Link, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Route, useLocation, BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";


// import GoogleAuth from "./GoogleAuth";
import Image from "mui-image";
import GoogleAuth from "../features/auth/components/GoogleAuth";

// import GoogleAuth from "./GoogleAuth";

const pages = [
  { name: "Profile", path: "/profile" },
  { name: "Create Project", path: "/create-project" },
  { name: "Discover Projects", path: "/discover-projects" },
  { name: "Rate Projects", path: "/rate-projects" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const location = useLocation();

  return (
    <Grid
      container
      sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar disableGutters>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            py="16px"
            px={{ xs: "36px", sm: "48px", md: "96px" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              color="#171627"
              sx={{
                mr: { md: 1, xl: 2 },
                display: { xs: "none", md: "flex" },
                fontWeight: 800,
                fontSize: { md: "24px", xl: "32px" },
                textDecoration: "none",
              }}>
                <img src={logo} alt="Logo" style={{ width: "110px", height: "24px", marginRight: "10px" }} />
            </Typography>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  color: "#171627",
                }}
                //
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    color="#171627">
                    <Button href={page.path}>
                      <Typography
                        textAlign="center"
                        fontWeight="500"
                        textTransform="none">
                        {page.name}
                      </Typography>
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* </Grid> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              color="#171627"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 800,
                textDecoration: "none",
                justifyContent: "center",
              }}>
                <img src={logo} alt="Logo" style={{ width: "110px", height: "24px", marginRight: "10px" }} />
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              textAlign="center"
              alignItems="center">
              {pages.map((page) => (
                <Button
                  key={page.name}
                  color="secondary"
                  component={RouterLink}
                  to={page.path}
                  sx={{
                    my: 2,
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    textTransform: "none",
                    margin: { md: "0 8px", xl: "0 32px" },
                  }}>
                  {/* <Link
                  // LinkComponent={<RouterLink to={page.path} />}
                  component={RouterLink}
                  to={page.path}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  color="secondary"
                  // to={page.path}
                  sx={{
                    my: 2,
                    textDecoration: "none",
                    display: "block",
                    textTransform: "none",
                    margin: "0 32px",
                  }}> */}
                  {page.name}
                  {/* </Link> */}
                </Button>
              ))}
            </Box>
            {/* // TODO temprorary switched with auth button from test week */}
            <GoogleAuth />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default ResponsiveAppBar;
