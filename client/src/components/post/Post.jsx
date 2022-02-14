import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { pink } from "@mui/material/colors";

import { Users } from "../../dummyData";

export default function Post(props) {
  const { post } = props;

  const user = Users.filter((user) => post.id === user.id);
  console.log(user[0]);

  return (
    <Card sx={{ w: 1, my: 4, borderRadius: 3 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt={Post.desc}
            src={user[0] ? user[0].profilePicture : ""}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user[0] ? user[0].username : "No-name"}
        subheader={post.date}
      />
      {post.desc ? (
        <CardContent sx={{ pt: 0 }}>
          <Typography variant={"h6"}>{post.desc}</Typography>
        </CardContent>
      ) : null}

      <CardMedia component="img" image={post.photo} alt="Paella dish" />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: pink[500] }} />
        </IconButton>
        <Box>{post.like} people like it</Box>
        <Box sx={{ ml: "auto" }}>{post.comment} comments</Box>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
