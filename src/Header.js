import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import FestivalIcon from '@mui/icons-material/Festival';
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "primary" }} position="sticky">
        <Toolbar>
          <NavLink to="/" underline="none" style={{ color: "white" }}>
            <Typography underline="none">
              < FestivalIcon/> <br/>  Samuel's Events App
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Event" />
            <Tab LinkComponent={NavLink} to="/events" label="Events" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;