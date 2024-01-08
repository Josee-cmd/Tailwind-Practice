import { Year } from "../Components/year";
import { Days } from "../Components/Dyas";
import { Month } from "../Components/Month";
import { Gender } from "../Components/Gender";
/*-------------------------------------*/
function SignUp() {
  return (
    <form
      action=""
      className="w-96 h-5/6 border border-white grid grid-cols-2 grid-rows-7 lg:bg-white shadow-2xl shadow-black-500 rounded-xl"
    >
      <div className="row-span-1 col-span-2 my-4 lg:my-0">
        <h1 className="text-4xl font-bold pl-3 my-1">Registrarte</h1>
        <h4 className="font-light pl-3">Es rápido y fácil</h4>
      </div>
      <div className="col-span-2 h-20 flex items-center justify-center gap-3 flex-wrap border-t border-gray-300 ">
        <input
          type="text"
          placeholder="Nombre"
          className=" p-2 w-44  pl-2 bg-gray-100 border border-gray-300 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Apellido"
          className=" p-2 w-44  pl-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
        />
      </div>
      <div className="col-span-2  flex items-center justify-center ">
        <input
          type="text"
          placeholder="Correo electronico"
          className="w-full  pl-2 mx-2 p-3 border border-gray-300 rounded-md bg-gray-100 outline-none"
        />
      </div>
      <div className="col-span-2  flex items-center justify-csenter ">
        <input
          type="password"
          placeholder="Contraseña nueva"
          className="w-full p-3 pl-2 mx-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
        />
      </div>

      <div className="col-span-2 ">
        <label
          htmlFor=""
          className="text-xs pl-2 text-gray-500"
        >
          <b>Fecha de nacimiento ?</b>
        </label>
        <div className=" flex items-center justify-between ">
          <Days />
          <Month />
          <Year />
        </div>
      </div>
      <div className=" col-span-2">
        <label htmlFor="" className="text-xs text-gray-500 pl-2">
          <b>Género ?</b>
        </label>
        <div className="flex flex-wrap justify-around  items-center">
          <Gender />
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <button className="bg-green-500 w-40 p-2 text-white rounded-md font-bold">
          Registrate
        </button>
      </div>
    </form>
  );
}

export default SignUp;
