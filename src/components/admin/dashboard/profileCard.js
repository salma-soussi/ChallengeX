import { Link } from "react-router-dom";
export default function ProfileCard() {
  return (
    <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 ml-1 ">
      <div className="flex-row gap-3 flex justify-center items-center h-20">
        <div className="flex-shrink-0">
          <img
            alt="profil"
            src="https://source.unsplash.com/random/360x480"
            className="mx-auto object-cover rounded-full h-14 w-14 "
          />
        </div>
        <div className=" flex flex-col">
          <span className="text-gray-600 dark:text-white text-xl font-medium w-max">
            Alex John
          </span>
          <span className="text-gray-400 text-xs">CTO</span>
        </div>
        <button
          type="button"
          className="py-2 px-3  bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        >
          <Link to="/app/Profile/1">Edit</Link>
        </button>
      </div>
    </div>
  );
}
