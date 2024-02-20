import {
  faArrowLeft,
  faSearch,
  faCircleUser,
  faBell,
  faClock,
  faStar,
  faUsers,
  faClipboard,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Alarm from "../assets/Icons/Alarma.png";
import { Icons } from "../Components/Icons";
import { Link } from "react-router-dom";
/*-----------------------------------------*/
function Setting() {
  const css = "text-xl";
  const stylesDiv = "flex flex-row px-2 items-center my-5";
  const p = "px-2";
  return (
    <main
      className="h-full w-full
      flex flex-col overflow-y-auto"
    >
      <section className="h-14 flex items-center pl-5 border-b-4 border-gray-300 ">
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
      <section className="flex justify-center items-center h-12  my-5  flex-wrap  ">
        <div className="w-80 flex items-center flex-wrap  ">
          <label htmlFor="search" className="top-7 mx-5 relative">
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
      <section className="my-5 pl-3 h-36  font-medium border-b-4 border-gray-300">
        <div className="flex justify-between">
          <p>Tu cuenta</p>
          <p className="logo pr-4">Josan</p>
        </div>
        <div className={`flex flex-row px-2 items-center mt-5`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faCircleUser}
          />
          <Link to="profile-user" className={`${p}`}>
            Centro de cuentas
          </Link>
        </div>
        <small className="px-9">Contraseñas, seguridad, datos personales</small>
      </section>
      <section className="my-5 pl-3 h-36  font-medium border-b-4 border-gray-300">
        <p>Como usas Josan</p>
        <div className={`${stylesDiv}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faBell}
          />
          <Link className={`${p}`}>Notificaciones</Link>
        </div>
        <div className={`${stylesDiv}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faClock}
          />
          <Link className={`${p}`}>Tiempo en la app</Link>
        </div>
      </section>
      <section className="my-5 pl-3 h-40 font-medium">
        <p>Más información y asistencia</p>
        <div className={`flex flex-row px-1 items-center my-5`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faStar}
          />
          <Link className={`px-4`}>Favoritos</Link>
        </div>
        <div className={`flex flex-row px-1 items-center my-5`}>
          <img className={`h-6`} src={Alarm} alt="Not Found" />
          <Link className={`alarm`}>Alarmas</Link>{" "}
        </div>
        <div className={`flex flex-row px-1 items-center my-5`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faUsers}
          />
          <Link className={`assistant`}>Asistentes</Link>
        </div>
        <div className={`${stylesDiv}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faClipboard}
          />
          <Link className={`px-5`}>Historial</Link>
        </div>
        <div className={`${stylesDiv}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faToggleOff}
          />
          <Link className={`px-3`}>Tema</Link>
        </div>
        <div className={`${stylesDiv} `}>
          <Icons
            css={`
              ${css}
            `}
            icon={faPaperPlane}
          />
          <Link className={`px-4`}>Compartir</Link>
        </div>
        <div className={`${stylesDiv}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faEnvelope}
          />
          <Link className={`px-4`}>Contactenos</Link>
        </div>
      </section>
    </main>
  );
}

export default Setting;