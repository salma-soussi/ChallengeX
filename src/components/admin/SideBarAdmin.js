import Side from "./sideBar/side";
import SideBarExtended from "./sideBar/sideBarExtended";
import { useState } from "react";

export default function SideBarAdmin() {
  const [isHide, setIsHide] = useState(false);
  function toggle() {
    setIsHide((prev) => !prev);
    console.log(isHide);
  }

  return (
    <div>
      {isHide ? (
        <Side toggle={toggle} id="2" />
      ) : (
        <SideBarExtended toggle={toggle} id="1" />
      )}
    </div>
  );
}
