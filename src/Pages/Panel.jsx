// Panel.jsx
import notification from "../assets/Icons/notificacion.png";
import { Card } from "../Components/Card";
import recipe from "../assets/Icons/receta.png";
import assistant from "../assets/Icons/asistente-personal.png";
import plus from '../assets/Icons/mas.png'
import {DateComponent} from '../Components/Date'
/*-----------------------------------------------------*/
function Panel() {
  return (
    <div className="h-full grid grid-cols-2 gap-x-4 gap-y-1 pb-16 mx-3">
      <div className="text-4xl flex justify-start items-center pl-2 my-5 "><p>Hey, <b>Jose</b></p></div>
      <div className="flex justify-end items-center">
        <div className="w-12 h-12 border border-gray-300 rounded-full flex justify-center items-center">
          <button className="cursor-pointer" onClick={()=>alert("Josee")}><img src={plus} alt="no found" className="w-12"/></button>
        </div>
      </div>
      <div className="col-span-2 border border-black h-24 rounded-2xl text-xl flex justify-start pl-3 items-center my-2 font-medium"><DateComponent/></div>
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
