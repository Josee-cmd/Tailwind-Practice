export function Gender() {
  return (
    <>
      <label htmlFor="" className="inline-block  text-center leading-10 border border-gray-300 rounded-md pr-4  ">
        <span className="pl-2">Hombre</span>
        <input className="mx-1 align-middle" type="radio" value="Hombre" />
      </label>
      <label htmlFor="" className="inline-block  text-center leading-10 border border-gray-300 rounded-md pr-4 ">
        <span className="pl-2">Mujer</span>
        <input className="mx-1 align-middle" type="radio" value="Mujer" />
      </label>
      <label htmlFor="" className="inline-block  text-center leading-10 border border-gray-300 rounded-md pr-4 ">
        <span className="pl-2">Personalizado</span>
        <input
          className="mx-1 align-middle"
          type="radio"
          value="Personalizado"
        />
      </label>
    </>
  );
}


