import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import BlogHome from "./pages/Blog/BlogHome";
import Login from "./pages/Blog/Login";
import { AdminDashboard } from "./pages/Admin/Dashboard";
import {CreatePost} from "./pages/Admin/CreatePost";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
        <Route path="/Admin/CreatePost" element={<CreatePost />} />
      </Routes> 
  );
};

export default App
