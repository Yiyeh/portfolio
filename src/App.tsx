import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { BlogHome } from "./pages/Blog/BlogHome";
import { Login } from "./pages/Blog/Login";
import { AdminPosts } from "./pages/Admin/Posts";
import { CreatePost } from "./pages/Admin/CreatePost";
import { AdminMessages } from "./pages/Admin/Messages";
import { PostDetail } from "./pages/Blog/PostDetail";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UpdatePost } from "./pages/Admin/UpdatePost";


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/blog/:slug/:id" element={<PostDetail />} />

      {/* Rutas protegidas para administradores */}
      <Route element={<ProtectedRoute adminOnly={true} />}>
        <Route path="/Admin/Posts" element={<AdminPosts />} />
        <Route path="/Admin/CreatePost" element={<CreatePost />} />
        <Route path="/Admin/UpdatePost/:postId" element={<UpdatePost />} />
        <Route path="/Admin/Messages" element={<AdminMessages />} />
      </Route>
    </Routes>
  );
}

export default App;
