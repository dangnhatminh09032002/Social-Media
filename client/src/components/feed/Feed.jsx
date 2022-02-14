import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import Container from "@mui/material/Container";

import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <Container>
      <Share />
      {Posts.map((p, index) => (
        <Post key={index} post={p} />
      ))}
    </Container>
  );
}
