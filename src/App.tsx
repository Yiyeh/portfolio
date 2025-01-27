import { Route, Routes } from "react-router-dom";


import { Home } from "./pages/Home";
// import Login from "./pages/blog/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Home />} /> */}
      </Routes> 
    </>
  );
};

export default App
