import Logo from "./logo";
import SbElement from "./sbElement";

export default function Side(props) {
  const data = [
    {
      svg: (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="m-auto"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
        </svg>
      ),
      link: "/app/home",
    },
    {
      svg: (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="m-auto"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
        </svg>
      ),
      link: "/app/Users",
    },
    {
      svg: (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="m-auto"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
        </svg>
      ),
      link: "/app/Comments",
    },
    {
      svg: (
        <svg
          width="20"
          height="20"
          className="m-auto"
          fill="currentColor"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
        </svg>
      ),
      link: "/app/Projects",
    },
  ];

  const elements = data.map((element, index) => (
    <SbElement svg={element.svg} link={element.link} key={index} id={index} />
  ));
  return (
    <div className="flex flex-col h-screen relative">
      <nav className="bg-white dark:bg-gray-800 w-16 h-screen justify-between flex flex-col left-0 top-0 shadow-md">
        <div className="mt-10 mb-10">
          <Logo />
          <div className="mt-10">
            <ul>{elements}</ul>
          </div>
        </div>
        <div className="mb-4">
          <button
            className="text-gray-400 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center px-4 "
            onClick={() => props.toggle()}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 m-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
