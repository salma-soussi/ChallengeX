/* eslint-disable jsx-a11y/anchor-is-valid */
export default function CommentTable() {
  return (
    <div className="container bg-white rounded-xl sm:p-4 dark:text-coolGray-100 shadow-md my-9 w-11/12">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Comments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-coolGray-700">
            <tr className="text-left">
              <th className="p-3">ID #</th>
              <th className="p-3">Visitor</th>
              <th className="p-3">Issued</th>
              <th className="p-3">Project</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 dark:border-coolGray-700 dark:bg-coolGray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Microsoft Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-coolGray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-coolGray-400">Tuesday</p>
              </td>
              <td className="p-3 text-left">
                <p>$15,792</p>
              </td>
              <td className="p-3 text-left inline-flex">
                <button className="px-3 m-1 py-1 font-semibold rounded-md dark:bg-green-400 dark:text-coolGray-900">
                  <span>Edit</span>
                </button>
                <button className="px-3 my-1 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-coolGray-900">
                  <span>Delete</span>
                </button>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 dark:border-coolGray-700 dark:bg-coolGray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Tesla Inc.</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-coolGray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-coolGray-400">Tuesday</p>
              </td>
              <td className="p-3 text-left">
                <p>$275</p>
              </td>
              <td className="p-3 text-left">
                <button className="px-3 m-1 py-1 font-semibold rounded-md dark:bg-green-400 dark:text-coolGray-900">
                  <span>Edit</span>
                </button>
                <button className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-coolGray-900">
                  <span>Delete</span>
                </button>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 dark:border-coolGray-700 dark:bg-coolGray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Coca Cola co.</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-coolGray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-coolGray-400">Tuesday</p>
              </td>
              <td className="p-3 text-left">
                <p>$8,950,500</p>
              </td>
              <td className="p-3 text-left">
                <button className="px-3 m-1 py-1 font-semibold rounded-md dark:bg-green-400 dark:text-coolGray-900">
                  <span>Edit</span>
                </button>
                <button className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-coolGray-900">
                  <span>Delete</span>
                </button>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 dark:border-coolGray-700 dark:bg-coolGray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Nvidia Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-coolGray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-coolGray-400">Tuesday</p>
              </td>
              <td className="p-3 text-left">
                <p>$98,218</p>
              </td>
              <td className="p-3 text-left">
                <button className="px-3 m-1 py-1 font-semibold rounded-md dark:bg-green-400 dark:text-coolGray-900">
                  <span>Edit</span>
                </button>
                <button className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-coolGray-900">
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
