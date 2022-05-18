import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function TableUser() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(7);

  useEffect(() => {
    fetch("http://localhost:4000/projects/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const UsersEl = currentUser.map((user) => (
    <tr>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link to="#" className="block relative">
              <img
                alt="profile"
                src="https://source.unsplash.com/random/360x480"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap flex-nowrap">
              {user.type}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.body}</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        {user.likes ? (
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Yes</span>
          </span>
        ) : (
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">No</span>
          </span>
        )}
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">01/10/2012</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm ">
        <button href="#" className="text-sky-600 hover:text-sky-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  text-red-600 hover:text-red-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="container px-3 mt-8 max-w-full ">
      <div className="py-2">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto ">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-7 py-3 bg-white  border-b border-gray-200 text-gray-800  dark:bg-gray-800 dark:text-white text-left text-sm uppercase font-normal w-52 "
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white  text-left text-sm uppercase font-normal"
                  >
                    Bio
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white text-left text-sm uppercase font-normal w-32"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white text-left text-sm uppercase font-normal"
                  >
                    Created at
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white text-left text-sm uppercase font-normal"
                  ></th>
                </tr>
              </thead>
              <tbody>{UsersEl}</tbody>
            </table>
            <Pagination
              elementParPage={usersPerPage}
              totalElements={users.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
