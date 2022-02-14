import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function Share() {
  return (
    <Box sx={{ mt: 3, p: 1, borderRadius: 2, boxShadow: 1 }}>
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ mr: 2, width: 56, height: 56 }}
          alt="Remy Sharp"
          src="./assets/posts/img_1.jpg"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          sx={{ width: 1 }}
        />
      </Box>
      <Box sx={{ my: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ mr: 2 }}>
              <ListItemButton sx={{ px: 1 }}>
                <PhotoLibraryIcon sx={{ mr: 1 }} color="error" />
                <ListItemText primary="Photo or video" />
              </ListItemButton>
            </Box>
            <Box sx={{ mr: 2 }}>
              <ListItemButton sx={{ px: 1 }}>
                <LabelIcon sx={{ mr: 1 }} color="primary" />
                <ListItemText primary="Tag" />
              </ListItemButton>
            </Box>
            <Box sx={{ mr: 2 }}>
              <ListItemButton sx={{ px: 1 }}>
                <LocationOnIcon sx={{ mr: 1 }} color="success" />
                <ListItemText primary="Location" />
              </ListItemButton>
            </Box>
            <Box sx={{ mr: 2 }}>
              <ListItemButton sx={{ px: 1 }}>
                <EmojiEmotionsIcon sx={{ mr: 1 }} color="warning" />
                <ListItemText primary="Feelings" />
              </ListItemButton>
            </Box>
          </Box>
          <Box
            sx={{
              mx: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button variant="contained" color="success" sx={{ float: "end" }}>
              Share
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
