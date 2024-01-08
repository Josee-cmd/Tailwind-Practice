import { Link } from "react-router-dom";
function Form() {
  return (
    <div className="max-w-sm flex justify-center items-center  lg:bg-white lg:h-96 rounded-md lg:shadow-2xl lg:shadow-black-500 lg:mx-10 ">
      <form action="" className="flex flex-col lg:w-96 lg:mb-5 w-72 ">
        <input
          type="text"
          placeholder="Correo electrónico o número de teléfono"
          autoFocus
          className="border border-gray-300 p-2 my-2 rounded-lg outline-none lg:mx-4 pl-4 lg:p-3 focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border border-gray-300 p-2 my-2 rounded-lg outline-none lg:mx-4 pl-4 lg:p-3 focus:border-blue-500"
          
        />
        <button className="p-2 bg-blue-500 text-white lg:mx-4 rounded-lg mt-4 lg:p-3 text-xl font-bold">
          Iniciar sesión
        </button>
        <h3 className="text-center cursor-pointer text-blue-700 my-5 ">
          ¿Has olvidado la contraseña?
        </h3>
        <hr className="border-1 border-gray-300 lg:w-80 lg:mx-8 w-60 mx-6" />
        <Link
          to="/Tailwind-Practice/signup"
          className="bg-green-500 text-white p-2 rounded-md mt-4 lg:mx-24 lg:p-3 font-bold mx-10 text-center"
        >
          Crear una cuenta
        </Link>
      </form>
      <div className=" hidden lg:block lg:absolute lg:mt-96">
        <h2 className="mt-20">
          <b>Crea una página</b> para un famoso, una marca o una empresa.
        </h2>
      </div>
    </div>
  );
}

export default Form;