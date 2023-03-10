import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, MenuItem, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Route, useLocation, BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

// import GoogleAuth from "./GoogleAuth";
import Image from "mui-image";
import GoogleAuth from "../features/auth/components/GoogleAuth";
import { useAuthContext } from "../features/auth/context/auth-context";

// import GoogleAuth from "./GoogleAuth";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { idToken } = useAuthContext();

  const pages = [];

  pages[2] = { name: "Discover Projects", path: "/discover-projects" };

  if (idToken) {
    pages[0] = { name: "Profile", path: "/profile" };
    pages[1] = { name: "Create Project", path: "/create-project" };
    pages[3] = { name: "Rate Projects", path: "/rate-projects" };
  }

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
      <AppBar
        position="static"
        elevation={0}>
        <Toolbar disableGutters>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            py="16px"
            px={{ xs: "36px", sm: "48px", md: "96px" }}>
            <Typography
              noWrap
              component="a"
              href="/"
              color="#171627"
              sx={{
                mr: { md: 1, xl: 2 },
                display: { xs: "none", md: "flex" },
              }}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "110px", height: "24px", marginRight: "10px" }}
              />
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
                  color: "#0A0908",
                }}
                //
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                  >
                    <Button href={page.path}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          textSize: "16px",
                          fontWeight: "600",
                          textTransform: "none",
                          color: "#0A0908"
                        }} 
                      >
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
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                justifyContent: "center",
              }}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "110px", height: "24px", marginRight: "10px" }}
              />
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
                    textAlign: "center",
                    textSize: "16px",
                    fontWeight: "600",
                    textTransform: "none",
                    justifyContent: "center",
                    margin: { md: "0 8px", xl: "0 32px" },
                    color: "#0A0908"
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
