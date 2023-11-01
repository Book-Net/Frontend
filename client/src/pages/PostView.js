import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";
import axios from "axios";

function PostView() { 

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:9000/PostView");
        setPosts(response.data);
        console.log("data : ",response.data);
        console.log("data1 : ", posts.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
    
  }, []);

  return (
    <div className="">
     <SideBar />
    <div className="post-container max-w-3xl mx-auto p-8 bg-[#ffffff] relative overflow-hidden rounded-lg shadow-md">
      <Posts/>
      <Posts/>
      <Posts/>
      
      
    </div>
   
    </div> 
  );
}

export default PostView;
