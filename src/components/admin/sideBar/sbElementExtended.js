import { NavLink } from "react-router-dom";
export default function SbElementExtended(props) {
  let style;
  let styleActive;

  styleActive =
    "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600";

  style =
    "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ";
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styleActive : style)}
      to={props.link}
    >
      {props.svg}
      <span className="mx-4 text-lg font-normal">{props.label}</span>
      <span className="flex-grow text-right"></span>
    </NavLink>
  );
}
