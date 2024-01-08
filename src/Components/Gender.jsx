import { useState } from "react";
export function Gender() {
  const [selector, setSelector] = useState(null);

  const handleClick = (value) => {
    selector === value ? setSelector(null) : setSelector(value);
  };

  return (
    <>
      <label
        htmlFor=""
        className={`inline-block  text-center leading-10 border border-gray-300 rounded-md pr-4
        ${selector === "Hombre" ? "bg-blue-200" : ""}
        `}
        onClick={() => handleClick("Hombre")}
      >
        <span className="pl-2">Hombre</span>
        <input
          className="mx-1 align-middle"
          type="radio"
          value="Hombre"
          checked={selector === "Hombre"}
          onChange={() => {}}
        />
      </label>
      <label
        htmlFor=""
        className={`inline-block  text-center leading-10 border border-gray-300 rounded-md pr-4
        ${selector === "Mujer" ? "bg-pink-200" : ""}
        `}
        onClick={() => handleClick("Mujer")}
      >
        <span className="pl-2">Mujer</span>
        <input
          className="mx-1 align-middle"
          type="radio"
          value="Mujer"
          checked={selector === "Mujer"}
          onChange={() => {}}
        />
      </label>
      <label
        htmlFor=""
        className={`inline-block  text-center leading-10 border border-gray-300 rounded-md pr-4
        ${selector === "Personalizado" ? "bg-green-200" : ""}
        `}
        onClick={() => handleClick("Personalizado")}
      >
        <span className="pl-2">Personalizado</span>
        <input
          className="mx-1 align-middle"
          type="radio"
          value="Personalizado"
          checked={selector === "Personalizado"}
          onChange={() => {}}
        />
      </label>
    </>
  );
}
