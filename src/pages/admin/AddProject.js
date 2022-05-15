import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarAdmin from "../../components/admin/SideBarAdmin";

export default function AddProject() {
  const history = useNavigate();
  const [project, setProject] = useState({
    title: "",
    type: "",
    tags: "",
    description: "",
    body: "",
    ImageUpload: "",
    fileUpload: "",
  });
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: type === "file" ? files[0].name : value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/projects/", {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => history("/app/Projects"));
  };
  return (
    <div className="flex justify-start relative m-0">
      <SideBarAdmin />
      <div className="flex flex-col p-2 relative mt-4 bg-gray-100 mr-10 rounded-lg  w-full pl-20">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto p-4 space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="p-4 rounded-md shadow-sm bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Title
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Title"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-gray-600 border-coolGray-300 text-coolGray-900"
                  value={project.title}
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Type
                </label>

                <select
                  className="block w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  name="type"
                  value={project.type}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="Design">Design</option>
                  <option value="Algorithm">Algorithm</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                  Tags
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="HTML,CSS,..."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-gray-600 border-coolGray-300 text-coolGray-900"
                  value={project.tags}
                  name="tags"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <div className="flex flex-wrap items-center gap-2 pt-6">
                  <span className="px-4 py-2 text-sm rounded-full text-red-600  bg-red-200 ">
                    Javascript
                  </span>
                  <span className="px-4 py-2 text-sm rounded-full text-yellow-600  bg-yellow-200 ">
                    CSS-HTML
                  </span>
                  <span className="px-4 py-2 text-sm rounded-full text-green-600  bg-green-200 ">
                    API
                  </span>
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Description
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-gray-600 border-coolGray-300 text-coolGray-900"
                  value={project.description}
                  name="description"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Body
                </label>
                <textarea
                  id="bio"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-gray-600 border-coolGray-300 text-coolGray-900"
                  value={project.body}
                  name="body"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/random/300x300/?1"
                    alt=""
                    className="object-cover object-center w-40 rounded-md h-40 bg-coolGray-500"
                  />
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100"
                      name="ImageUpload"
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="bio" className="text-sm">
                  Attachments
                </label>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    <input
                      type="file"
                      name="fileUpload"
                      id="files"
                      className="px-8 py-12 border-2 border-dashed rounded-md border-coolGray-300 text-coolGray-600 bg-coolGray-100"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <button className="py-2 px-4 flex justify-center items-center bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
