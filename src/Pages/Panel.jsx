// Panel.jsx
import notification from "../assets/Icons/notificacion.png";
import { Card } from "../Components/Card";
import recipe from "../assets/Icons/receta.png";
import assistant from "../assets/Icons/asistente-personal.png";
import plus from "../assets/Icons/mas.png";
import { DateComponent } from "../Components/Date";
import { useRef } from "react";

/*-----------------------------------------------------*/
function Panel() {
  const imgRef = useRef();
  const handleChanges = (e) => {
    const fileInput = e.target;
    const img = imgRef.current;

    if (fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      // Si no se selecciona un archivo, establece la imagen de fondo con la imagen de "plus"
      img.src = plus;
    }
  };
  return (
    <div className="h-full grid grid-cols-2 gap-x-4 gap-y-1 pb-16 mx-3">
      <div className="text-4xl flex justify-start items-center pl-2 my-5 ">
        <p>
          Hey, <b>Jose</b>
        </p>
      </div>
      <div className="flex justify-end items-center flex-wrap">
        <div className="w-20 h-20 border border-gray-500 rounded-full flex justify-center items-center flex-wrap ">
          <label htmlFor="img" className="cursor-pointer">
            <img
              ref={imgRef}
              src={plus}
              alt="no found"
              className="h-16 rounded-xl bg-cover bg-no-repeat bg-center"
            />
          </label>
        </div>
        <input
          type="file"
          id="img"
          onChange={handleChanges}
          className="hidden"
        />
      </div>
      <div className="col-span-2 border border-black h-24 rounded-2xl text-xl flex justify-start pl-3 items-center my-2 font-medium">
        <DateComponent />
      </div>
      <div className="col-span-2 w-full text-xl border border-black h-24 rounded-2xl flex justify-start items-center pl-3 font-medium">
        <h1>La proxima alarma sonara en: 8-HR</h1>
      </div>
      <Card src={notification} content="Alarmas" />
      <Card src={recipe} content="Recetas médica" />
      <Card src={assistant} content="Asistente" />
    </div>
  );
}

export default Panel;
