import { useState } from "react";
const DropDownMenu = ({
  withBackground = false,
  label = "test",
  icon = "",
  forceOpen = false,
  withDivider = false,
  items = [
    {
      label: "Account",
      link: "testLink",
      desc: "",
    },
    {
      label: "Logout",
      link: "testLink",
      desc: "",
    },
  ],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={` flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 dark:cursor-pointer focus:outline-none `}
          id="options-menu"
        >
          <img
            alt="profil"
            src="https://source.unsplash.com/random/400x400"
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </button>
      </div>

      {(forceOpen || isOpen) && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 mr-3 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.link || "#"}
                  className={`${
                    item.icon ? "flex items-center" : "block"
                  } block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600`}
                  role="menuitem"
                >
                  {item.icon}

                  <span className="flex flex-col">
                    <span>{item.label}</span>
                    {item.desc && (
                      <span className="text-gray-400 text-xs">{item.desc}</span>
                    )}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDownMenu;
