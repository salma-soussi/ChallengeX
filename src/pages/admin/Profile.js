import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProfile from "../../components/admin/EditProfile";
import SideBarAdmin from "../../components/admin/SideBarAdmin";
import banner from "../../image/banner02.jpg";
export default function Profile() {
  const { id } = useParams();
  const [dataProfile, setDataProfile] = useState({
    name: "salma soussi",
    email: "salma@gmail.com",
    bio: "let's try this",
    photo: "zzz.png",
  });
  useEffect(() => {
  //   fetch("http://localhost:4000/projects/" + id)
  //     .then((res) => res.json())
  //     .then((data) => setDataProfile(data));
   }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="flex  justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col mr-10 p-1 relative w-full pl-20">
        <div className="shadow-lg rounded-2xl  bg-white dark:bg-gray-800">
          <img
            alt="profile"
            src={banner}
            className="rounded-t-lg h-48 w-full mb-4"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-20">
            <img
              alt="profile"
              src="	https://source.unsplash.com/random/360x480"
              className="mx-auto object-cover rounded-full h-28 w-28  border-2 border-white dark:border-gray-800"
            />
            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
              {dataProfile.name}
            </p>
            <p className="text-gray-400 text-xs mb-4">{dataProfile.bio}</p>
            <p className="text-xs p-2 bg-blue-400 text-white px-4 rounded-full">
              Admin
            </p>
            <EditProfile data={dataProfile} />
          </div>
        </div>
      </div>
    </div>
  );
}
