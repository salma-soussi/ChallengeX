import { useState } from "react";
//import { useNavigate } from "react-router-dom";

export default function EditProfile({ data }) {
  //const history = useNavigate();
  const [formData, setFormData] = useState(data);
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevProject) => ({
      ...prevProject,
      [name]: type === "file" ? files[0].name : value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch("http://localhost:4000/projects/", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // }).then(() => history("/app/Home"));
  };
  console.log(formData);
  return (
    <section className="p-6 text-coolGray-900 w-4/5 mt-5">
      <form
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3 mr-4">
            <label
              htmlFor="Name"
              className="text-base text-gray-800 dark:text-white "
            >
              Name
            </label>
            <input
              id="Name"
              type="text"
              placeholder="Name"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-coolGray-300 text-coolGray-900 mt-3 h-10 bg-gray-50 px-2"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-coolGray-300 text-coolGray-900 mt-3 h-32 bg-gray-50 p-2"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-full">
            <label
              htmlFor="bio"
              className="text-sm text-gray-800 dark:text-white"
            >
              Photo
            </label>
            <div className="flex items-center space-x-2 mt-3">
              <img
                src="	https://source.unsplash.com/random/360x480"
                alt=""
                className="w-10 h-10 rounded-full bg-coolGray-500 bg-coolGray-300"
              />
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100"
                  name="photo"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
