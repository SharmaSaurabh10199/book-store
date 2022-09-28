import React, { useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "black" }} position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksIcon />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            {/* by default first elem is underlined */}
            <Tab LinkComponent={NavLink} to="/about" label="About us" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
