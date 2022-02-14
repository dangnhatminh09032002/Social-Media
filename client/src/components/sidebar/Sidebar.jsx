import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import GroupIcon from "@mui/icons-material/Group";

const drawerWidth = 300;

const lists = [
  { text: "Feed", icon: { component: <RssFeedIcon /> }, href: "" },
  { text: "Chats", icon: { component: <ChatIcon /> }, href: "" },
  { text: "Videos", icon: { component: <PlayCircleFilledIcon /> }, href: "" },
  { text: "Groups", icon: { component: <GroupIcon /> }, href: "" },
];

function Sidebar(props) {
  const { mobileOpen, handleDrawerToggle } = props;

  const drawer = (
    <div>
      <List>
        {lists.map((list, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{list.icon.component}</ListItemIcon>
            <ListItemText primary={list.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Box>
    </Box>
  );
}

export default Sidebar;
