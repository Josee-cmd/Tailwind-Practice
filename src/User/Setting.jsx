import {
  faArrowLeft,
  faSearch,
  faCircleUser,
  faBell,
  faClock,
  faStar,
  faUsers,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import Alarm from "../assets/Icons/Alarma.png";
import { Icons } from "../Components/Icons";
import { Link } from "react-router-dom";
/*-----------------------------------------*/
function Setting() {
  const css = "text-xl";
  const styles = "flex flex-row px-2 items-center ";
  const p = "px-2";
  return (
    <main className="h-full ">
      <section className="h-10 flex items-center pl-5 border-b border-gray-300 ">
        <Link to="/Tailwind-Practice/panel/home">
          <Icons
            css={`
              ${css}
            `}
            icon={faArrowLeft}
          />
        </Link>
        <p className="pl-3 font-semibold">Configuraciones y privacidad</p>
      </section>
      <section className="flex justify-center items-center h-12  my-5  flex-wrap ">
        <div className="w-80 flex items-center flex-wrap ">
          <label htmlFor="search" className="mx-5 absolute">
            <Icons
              css={`
                ${css}
              `}
              icon={faSearch}
            />
          </label>
          <input
            className="pl-12 pb-1 w-full h-8 rounded-xl  border border-black  outline-none"
            type="text"
            name="search"
            id="search"
            placeholder="Buscar"
          />
        </div>
      </section>
      <section className="my-5 pl-3 h-36  font-medium border-b border-gray-300">
        <p>Tu cuenta</p>
        <div className={`${styles}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faCircleUser}
          />
          <Link className={`${p}`}>Centro de cuentas</Link>
        </div>
        <small className="px-9">Contraseñas, seguridad, datos personales</small>
      </section>
      <section className="my-5 pl-3 h-36  font-medium border-b border-gray-300">
        <p>Como usas Josan</p>
        <div className={`${styles}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faBell}
          />
          <Link className={`${p}`}>Notificaciones</Link>
        </div>
        <div className={`${styles} my-2`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faClock}
          />
          <Link className={`${p}`}>Alarmas</Link>
        </div>
      </section>
      <section className="my-5 pl-3 h-40 font-medium">
        <div className={`${styles}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faStar}
          />
          <Link className={`${p}`}>Favoritos</Link>
        </div>
        <div className={`${styles} my-2`}>
          <img className={`${css}`} src={Alarm} alt="Not Found" />
          <p className={`${p}`}>Alarmas</p>{" "}
        </div>
        <div className={`${styles} my-2 `}>
          <Icons
            css={`
              ${css}
            `}
            icon={faUsers}
          />
          <Link className={`${p}`}>Asistentes</Link>
        </div>
        <div className={`flex flex-row px-3 items-center`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faClipboard}
          />
          <Link className={`mx-3`}>Historial</Link>
        </div>
      </section>
    </main>
  );
}

export default Setting;
