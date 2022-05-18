import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import UserElTab from "./UserElTab";

export default function TableUser() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(7);

  const deleted = (id) => {
    fetch("http://localhost:4000/users/" + id, { method: "delete" });
  };

  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(users);
  const UsersEl = currentUser.map((user) => (
    <UserElTab user={user} deleted={deleted} key={user._id} />
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
