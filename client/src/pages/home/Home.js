import * as React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Box from "@mui/material/Box";
import Feed from "../../components/feed/Feed";

export default function Home() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <Topbar handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: "flex" }}>
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Feed />
        <Rightbar />
      </Box>
    </Box>
  );
}
