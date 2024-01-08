export function Month() {
  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className=" container w-36 h-7 border border-gray-300 rounded-md bg-white mx-2 flex justify-center items-center relative">
      <select name="" className="w-full flex justify-start pl-2" defaultValue="">
        <option value="" disabled>
          Mes
        </option>
        {month.map((element) => (
          <option key={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}
