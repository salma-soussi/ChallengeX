import { NavLink } from "react-router-dom";
export default function SbElement(props) {
  let style;
  let styleActive;

  styleActive =
    " h-6 w-6 p-4 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600";

  style =
    "h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200";
  return (
    <li className="my-12 text-center">
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? styleActive : style)}
      >
        <span>{props.svg}</span>
      </NavLink>
    </li>
  );
}
