import { Link } from "react-router-dom";

export default function Logo() {
  return (

    <Link to="/app/home">
      <img
        src="https://source.unsplash.com/random/360x480"
        className="rounded-full w-10 h-10 mb-3 mx-auto"
        alt="avatar"
      />
    </Link>
  );
}
