export default function InfoCard(props) {
  return (
    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 mr-4 h-28 w-28 mb-4">
      <div className="flex justify-center">
        {props.icon}
      </div>
      <p className="text-sm text-black font-medium dark:text-white text-center">
        {props.name}
      </p>
      <div className="flex flex-col justify-center">
        <p className="text-gray-700 dark:text-gray-100 text-3xl text-center font-bold ">
          {props.num}
        </p>
      </div>
    </div>
  );
}
