import { Route, Routes } from "react-router-dom";


import { Home } from "./pages/Home";
import Login from "./pages/blog/Login";
import CreatePost from "./pages/blog/CreatePost";
import BlogHome from "./pages/blog/BlogHome";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/create" element={<CreatePost />} />
        <Route path="/blog" element={<BlogHome />} />
      </Routes> 
    </>
  );
};

export default App
