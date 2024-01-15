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
    <div className="h-full grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-2 pb-16 mx-3">
      <div className="text-4xl flex justify-start items-center pl-2"><p>Hey, <b>Jose</b></p></div>
      <div className="flex justify-end items-center">
        <div className="w-12 h-12 border border-gray-300 rounded-full flex justify-center items-center">
          <button className="cursor-pointer"><img src={plus} alt="no found" className="w-12"/></button>
        </div>
      </div>
      <div className="col-span-2 border border-black h-20 rounded-2xl text-lg flex justify-start pl-3 items-center my-2"><DateComponent/></div>
      <div className="col-span-2 w-full text-lg border border-black h-20 rounded-2xl flex justify-start items-center pl-3 relative bottom-4">
        <h1>La proxima alarma sonara en: <b>8-Hr</b></h1>
      </div>
      <Card src={notification} content="Ver o añadir una alarma" />
      <Card src={recipe} content="Ver receta medica" />
      <Card src={assistant} content="Ver o añadir un asistente" />

    </div>
  );
}

export default Panel;
