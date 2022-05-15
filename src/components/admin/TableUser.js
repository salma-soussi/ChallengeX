/* eslint-disable jsx-a11y/anchor-is-valid */
export default function TableUser() {
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
              <tbody>
                <tr>
                  <td className="pl-5 pr-2 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://source.unsplash.com/random/360x480"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap flex-nowrap">
                          Marcus coco dfezafr
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Tailwind lets you conditionally apply utility classes in
                      different states using variant modifiers. For example, use
                      hover:bg-cyan-600 to only apply the bg-cyan-600 utility on
                      hover.
                    </p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1   leading-tight">
                      <span className="relative">soussiselma@hotmail.com</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600 hover:text-red-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://source.unsplash.com/random/360x480"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap flex-nowrap">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Designer</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1   leading-tight">
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600 hover:text-red-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-5 pr-2 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://source.unsplash.com/random/360x480"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap flex-nowrap">
                          Marcus coco dfezafr
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Tailwind lets you conditionally apply utility classes in
                      different states using variant modifiers. For example, use
                      hover:bg-cyan-600 to only apply the bg-cyan-600 utility on
                      hover.
                    </p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1   leading-tight">
                      <span className="relative">soussiselma@hotmail.com</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600 hover:text-red-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://source.unsplash.com/random/360x480"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap flex-nowrap">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Designer</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1   leading-tight">
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600 hover:text-red-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-5 pr-2 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://source.unsplash.com/random/360x480"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap flex-nowrap">
                          Marcus coco dfezafr
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Tailwind lets you conditionally apply utility classes in
                      different states using variant modifiers. For example, use
                      hover:bg-cyan-600 to only apply the bg-cyan-600 utility on
                      hover.
                    </p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1   leading-tight">
                      <span className="relative">soussiselma@hotmail.com</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600 hover:text-red-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://source.unsplash.com/random/360x480"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap flex-nowrap">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Designer</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1   leading-tight">
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600 hover:text-red-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="px-5 bg-white py-2 flex flex-col xs:flex-row items-center xs:justify-between dark:bg-gray-800 dark:text-white">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
