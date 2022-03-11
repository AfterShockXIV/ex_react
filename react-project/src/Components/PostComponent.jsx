import React, { useEffect, useState } from "react";
import ApiController from "../Apis/ApiController";

const PostComponent = () => {
  //first loading
  const [postData, setPostData] = useState([]);

  const getPosts = async () => {
    try {
      await ApiController.GetPosts().then.apply( (res) => {
        if (res) {
          await setPostData(res);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);


  return <div>
    
  </div>;
};

export default PostComponent;
