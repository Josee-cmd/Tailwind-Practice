function Form() {
  return (
    <div className="max-w-sm flex justify-center items-center  lg:bg-white lg:h-96 rounded-md lg:shadow-2xl lg:shadow-black-500 lg:mx-10 ">
      <form action="" className="flex flex-col lg:w-96 mb-10 w-72 ">
        <input
          type="text"
          placeholder="Correo electrónico o número de teléfono"
          className="border border-gray-300 p-2 my-2 rounded-lg outline-none lg:mx-4 pl-4 lg:p-3"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border border-gray-300 p-2 my-2 rounded-lg outline-none lg:mx-4 pl-4 lg:p-3"
        />
        <button className="p-2 bg-blue-500 text-white lg:mx-4 rounded-lg mt-4 lg:p-3 text-xl font-bold ">
          Iniciar sesión
        </button>
        <h3 className="text-center cursor-pointer text-blue-700 my-5 ">
        ¿Has olvidado la contraseña?
        </h3>
        <hr className="border-1 border-gray-300 lg:w-80 lg:mx-8" />
        <button className="bg-green-500 text-white p-2 rounded-md mt-4 lg:mx-24 lg:p-3 font-bold mx-10">
          Crear una cuenta
        </button>
      </form>
    </div>
  );
}

export default Form;
