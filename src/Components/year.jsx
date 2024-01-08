export function Year() {
  const year = [
    2000, 2001, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];

  return (
    <div className=" container w-28 h-7 border border-gray-300 rounded-md bg-white mx-2 flex justify-center items-center relative">
      <select name="" className="w-full flex justify-start pl-2">
        <option value="" disabled>
          Año
        </option>
        {year.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}
