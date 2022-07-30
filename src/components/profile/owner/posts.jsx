import React from "react";
import CreatePost from "./create-post";
import Post from "./post";
const Posts = () =>{
    return (
        <>
        {/* Share feed START */}
        <CreatePost/>
        {/* Share feed END */}
        {/* Card feed item START */}
        <Post/>
        {/* Card feed item END */}             
        </>
    )
}

export default Posts;