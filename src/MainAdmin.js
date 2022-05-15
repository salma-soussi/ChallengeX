import { useState } from "react";
import SideBar from "./components/admin/sideBar/sideBar";
import SideBarExtended from "./components/admin/sideBar/sideBarExtended";
import DashBoard from "./pages/admin/Dashboard";
import User from "./pages/admin/User";
import Comments from "./pages/admin/Comments";
import Project from "./pages/admin/Project";
import Profile from "./pages/admin/Profile";
import EditComment from "./pages/admin/EditComment";
import AddEditProject from "./pages/admin/AddEditProject";

function MainAdmin() {
  const [isHide, setIsHide] = useState(false);
  function toggle() {
    setIsHide((prev) => !prev);
  }
  return (
    <div className="flex  justify-start relative  m-0">
      {isHide ? (
        <SideBar toggle={toggle} id="1" />
      ) : (
        <SideBarExtended toggle={toggle} id="2" />
      )}
      <div className="w-full pl-20   ">
        <User />
      </div>
    </div>
  );
}

export default MainAdmin;
