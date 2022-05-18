import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Admin
import DashBoard from "./pages/admin/Dashboard";
import User from "./pages/admin/User";
import Comments from "./pages/admin/Comments";
import Project from "./pages/admin/Project";
import EditProject from "./pages/admin/EditProject";
import Profile from "./pages/admin/Profile";
import AddProject from "./pages/admin/AddProject";
import EditComment from "./pages/admin/EditComment";
import Login from "./pages/admin/Login";
// visitor
import Home from "./pages/visitor/Home";
import Projects from "./pages/visitor/Projects";
import ProjectOne from "./pages/visitor/project";
import SignIn from "./pages/visitor/SignIn";
import SignUp from "./pages/visitor/SignUp";

function App() {
  return (
    <Router>
      <main className="">
        <Routes>
          <Route path="/app/home" element={<DashBoard />} />
          <Route path="/app/Users" element={<User />} />
          <Route path="/app/Comments" element={<Comments />} />
          <Route path="/app/Comments/:id" element={<EditComment />} />
          <Route path="/app/Projects" element={<Project />} />
          <Route path="/app/Projects/add" element={<AddProject />} />
          <Route path="/app/Projects/:id" element={<EditProject />} />
          <Route path="/app/Profile/:id" element={<Profile />} />
          <Route path="/app" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/Challenges" element={<Projects />} />
          <Route path="/Challenges/:id" element={<ProjectOne />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
