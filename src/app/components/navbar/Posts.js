import React from "react";
import Container from "../Container";
import { AiFillFolderOpen } from "react-icons/ai";
import PostBox from "../PostBox";

export const posts = [
  {
    label: "Test",
    icon: AiFillFolderOpen,
    description: "This post is just for testing",
  },
  {
    label: "Test",
    icon: AiFillFolderOpen,
    description: "This post is just for testing",
  },
  {
    label: "Test",
    icon: AiFillFolderOpen,
    description: "This post is just for testing",
  },
  {
    label: "Test",
    icon: AiFillFolderOpen,
    description: "This post is just for testing",
  },
];

const Posts = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {posts.map((item) => {
          <PostBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />;
        })}
      </div>
    </Container>
  );
};

export default Posts;
