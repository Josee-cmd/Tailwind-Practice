// Panel.jsx
import notification from "../assets/Icons/notificacion.png";
import { Card } from "../Components/Card";
import recipe from "../assets/Icons/receta.png";
import assistant from "../assets/Icons/asistente-personal.png";
import plus from "../assets/Icons/mas.png";
import { DateComponent } from "../Components/Date";
import { useRef, useEffect, useState } from "react";
import mas from "../assets/Icons/plus.png";
import close from "../assets/Icons/cerrar.png";
import { Link } from "react-router-dom";
/*-----------------------------------------------------*/
function Panel() {
  const [change, setChange] = useState(false);

  const imgRef = useRef();
  const p = useRef();

  const handleClass = () => {
    setChange(!change);
  };
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
      imgRef.current.style.width = "3rem";
      imgRef.current.style.height = "3rem";
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
              className="w-5 rounded-full"
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
      <div className="flex justify-center items-center w-full h-40">
        <div
          className={`${
            change ? "items " : "itemsHide"
          } invisible border border-black rounded-xl w-full h-0 grid grid-rows-3 `}
        >
          <div className={`${change ? 'visible ':''} invisible flex justify-end pr-2 py-2`}>
            <img src={close} alt="no found" onClick={handleClass}/>
          </div>
          <div className={`${change ? 'visible ':''} invisible h-28 flex flex-col justify-center items-center  text-lg font-medium `}>
            <Link to = "NoFound">Añadir alarma</Link>
            <Link to = "NoFound">Añardir Asistente</Link>
          </div>
        </div>
        <img
          src={mas}
          alt="no found"
          className={`${change ? "hide " : ""}absolute w-10`}
          onClick={handleClass}
        />
      </div>
    </div>
  );
}

export default Panel;
