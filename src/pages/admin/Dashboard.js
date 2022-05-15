import InfoCard from "../../components/admin/dashboard/InfoCard";
import CommentTable from "../../components/admin/dashboard/CommentTable";
import ProjectsTable from "../../components/admin/dashboard/ProjectsTable";
import ProfileCard from "../../components/admin/dashboard/profileCard";
import SideBarAdmin from "../../components/admin/SideBarAdmin";
import hello from "../../image/Illustration.png";

export default function DashBoard() {
  const data = [
    {
      label: "User",
      icon: (
        <span className="rounded-xl relative p-4 bg-sky-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-sky-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ),
      num: 5,
    },
    {
      label: "Project",
      icon: (
        <span className="rounded-xl relative p-4 bg-green-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
              clipRule="evenodd"
            />
            <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
          </svg>
        </span>
      ),
      num: 5,
    },
    {
      label: "Comment",
      icon: (
        <span className="rounded-xl relative p-4 bg-red-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </span>
      ),
      num: 5,
    },
  ];
  const elements = data.map((element) => (
    <InfoCard icon={element.icon} name={element.label} num={element.num} key={element.label} />
  ));
  return (
    <div className="flex  justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col p-1 relative w-full pl-20">
        <div className="flex justify-items-start w-full items-center mt-7 flex-wrap">
          <div className="bg-gray-100 dark:bg-gray-800 dark:text-coolGray-100 p-1 space-y-6 rounded-lg shadow-md relative mr-9 h-32">
            <img
              src={hello}
              alt="hello"
              className=" absolute bottom-0 right-0 w-28"
            />
            <p className="text-4xl font-bold ml-4 mb-0 font-sans pr-56 dark:text-white">
              Hello Alex!
            </p>
            <span className="text-sm font-semibold ml-4 mb-4 mt-0 font-sans pr-54 dark:text-white min-h-max">
              It’s good to see you again.
            </span>
          </div>
          <div className="flex flex-wrap items-center mt-4">{elements}</div>
          <ProfileCard />
        </div>
        <CommentTable />
        <ProjectsTable />
      </div>
    </div>
  );
}
