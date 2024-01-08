export function Days() {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <div className=" container w-28 h-7 border border-gray-300 rounded-md bg-white mx-2 flex justify-center items-center relative">
      <select name="" className="w-full flex justify-start pl-2">
        <option value="" disabled>
          Dia
        </option>
        {days.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}
