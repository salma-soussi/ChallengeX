export default function EditProfile() {
  return (
    <section className="p-6 text-coolGray-900 w-4/5 mt-5">
      <form
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3 mr-4">
            <label
              htmlFor="username"
              className="text-base text-gray-800 dark:text-white "
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-coolGray-300 text-coolGray-900 mt-3 h-10 bg-gray-50 px-2"
            />
          </div>
          <div className="col-span-full sm:col-span-3 ml-4">
            <label
              htmlFor="website"
              className="text-base text-gray-800 dark:text-white"
            >
              Email
            </label>
            <input
              id="website"
              type="email"
              placeholder="Exemple@mail.com"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-3 h-10 bg-gray-50 px-2"
            />
          </div>
          <div className="col-span-full">
            <label
              htmlFor="bio"
              className="text-base text-gray-800 dark:text-white"
            >
              Bio
            </label>
            <textarea
              id="bio"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-coolGray-300 text-coolGray-900 mt-3 h-32 bg-gray-50"
            ></textarea>
          </div>
          <div className="col-span-full">
            <label htmlFor="bio" className="text-sm text-gray-800 dark:text-white">
              Photo
            </label>
            <div className="flex items-center space-x-2 mt-3">
              <img
                src="	https://source.unsplash.com/random/360x480"
                alt=""
                className="w-10 h-10 rounded-full bg-coolGray-500 bg-coolGray-300"
              />
              <button
                type="button"
                className="px-4 py-2 border rounded-md border-coolGray-800 text-gray-800 dark:text-white"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
