import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import BlogHome from "./pages/Blog/BlogHome";
import Login from "./pages/Blog/Login";
import { AdminPosts } from "./pages/Admin/Posts";
import {CreatePost} from "./pages/Admin/CreatePost";
import { AdminMessages } from "./pages/Admin/Messages";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/Admin/Posts" element={<AdminPosts />} />
        <Route path="/Admin/CreatePost" element={<CreatePost />} />
        <Route path="/Admin/Messages" element={<AdminMessages />} />
      </Routes> 
  );
};

export default App
