// Panel.jsx
import notification from "../assets/Icons/notificacion.png";
import { Card } from "../Components/Card";
import recipe from "../assets/Icons/receta.png";
import assistant from "../assets/Icons/asistente-personal.png";
import plus from "../assets/Icons/mas.png";
import { DateComponent } from "../Components/Date";
import { useRef, useEffect } from "react";

/*-----------------------------------------------------*/
function Panel() {
  const imgRef = useRef();
  const p = useRef();
  const handleChanges = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target.result;
        imgRef.current.src = e.target.result;
        imgRef.current.style.width = "3rem";
        imgRef.current.style.height = "3rem";

        const dataJson = JSON.stringify(url);
        localStorage.setItem("user", dataJson);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      // Si no se selecciona un archivo, establece la imagen de fondo con la imagen de "plus"

      imgRef.current.src = plus;
      imgRef.current.style.width = "20px";
      imgRef.current.style.height = "20px";
    }
  };

  const recoverData = () => {
    const data = localStorage.getItem("user");
    if (data) {
      const dataSave = JSON.parse(data);
      imgRef.current.src = dataSave;
    } else {
      console.log("La url esta daña");
    }
  };

  useEffect(() => {
    recoverData();
  }, []);

  return (
    <div className="h-full grid grid-cols-2 gap-x-4 gap-y-1 pb-16 mx-3">
      <div className="text-4xl flex justify-start items-center pl-2 my-5 ">
        <p ref={p}>
          Hey, <b>Jose</b>
        </p>
      </div>
      <div className="flex justify-end items-center flex-wrap">
        <div className="w-12 h-12 border border-gray-500 rounded-full flex justify-center items-center ">
          <label htmlFor="img" className="cursor-pointer">
            <img
              ref={imgRef}
              src={plus}
              alt="no found"
              className="w-14 rounded-full"
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
      <div className="col-span-2 border border-black h-20 rounded-2xl text-xl items-center font-medium">
        <DateComponent />
      </div>
      <div className="col-span-2 w-full text-xl border border-black h-24 rounded-2xl flex justify- items-center pl-3 font-semibold tracking-wide">
        <h1>La proxima alarma sonara en: 8-HR</h1>
      </div>
      <Card src={notification} content="Alarmas" />
      <Card src={recipe} content="Recetas médica" />
      <Card src={assistant} content="Asistente" />
    </div>
  );
}

export default Panel;
