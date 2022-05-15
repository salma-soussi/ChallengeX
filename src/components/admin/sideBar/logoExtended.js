export default function LogoExtended(props) {
  return (
    <div className="flex items-center justify-start mx-5 mt-10">
      <img
        src={props.image}
        alt="avatar"
        className="rounded-full w-10 h-10 mb-3"
      />
      <span className="text-gray-600 dark:text-gray-300 ml-4 mb-3 text-2xl font-bold">
        {props.name}
      </span>
    </div>
  );
}
