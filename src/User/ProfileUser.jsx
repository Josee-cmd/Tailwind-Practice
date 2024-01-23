import {
  faSearch,
  faArrowLeft,
  faArrowRightToBracket,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { Icons } from "../Components/Icons";
import { Link } from "react-router-dom";
import profile from "../assets/Icons/perfil.png";
import personalInf from "../assets/Icons/forma.png";
import permission from '../assets/Icons/permiso.png';
import {useEffect,useRef} from 'react'
/*--------------------------------------------------*/
export default function ProfileUser() {
  const css = "text-2xl";
  const stylesDiv = "flex flex-row px-3 items-center my-4";
  const img = useRef();
  const p = "px-2";

  const recoverData = () =>{
    const data = localStorage.getItem("user");
    if(data){
      const dataSave = JSON.parse(data);
      img.current.src = dataSave;
    }else{
      console.log("La url esta daña")
    }
  }

  useEffect(()=>{
    recoverData()
  },[])

  return (
    <main className="w-full h-full flex flex-col overflow-y-auto ">
      <header className="p-5 flex justify-between items-center border-b-4 border-gray-300">
        <div className="mx-5">
          {" "}
          <Link to="/Tailwind-Practice/panel/User-Setting">
            {" "}
            <Icons
              css={`
                ${css}
              `}
              icon={faArrowLeft}
            />
          </Link>
        </div>
        <p className="logo text-2xl font-semibold">Josan</p>
        <div className="mx-5 cursor-pointer">
          <Icons
            css={`
              ${css}
            `}
            icon={faSearch}
          />
        </div>
      </header>

      <section className="my-5 w-full h-32 flex border-b-4 border-gray-300">
        <p className="text-lg mx-2 font-bold relative">Perfil</p>
        <div className="w-72 h-full flex justify-center items-center flex-col">
          <img ref={img} className="w-20 h-20 rounded-full border border-black" />
          <p className="text-2xl font-bold">Jose</p>
        </div>
      </section>

      <section className="my-5 w-full h-48 flex flex-col font-semibold border-b-4 border-gray-300">
        <p className={`${p}`}>Experiencias conectadas</p>
        <div className={`${stylesDiv}`}>
          <img src={profile} alt="no found" className="h-10 " />
          <Link to="" className={`${p}`}>
            Compartir cuenta
          </Link>
        </div>
        <div className={`${stylesDiv}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faArrowRightToBracket}
          />
          <Link to="" className={`px-6`}>
            Iniciar sesión con cuentas
          </Link>
        </div>
      </section>
      <section className="my-5 w-full h-64 flex flex-col font-semibold">
        <p className={`${p}`}>Configuración de cuentas</p>
        <div className={`${stylesDiv}`}>
          <Icons
            css={`
              ${css}
            `}
            icon={faShield}
          />
          <Link className={`${p}`}>Contraseña y seguridad</Link>
        </div>
        <div className={`flex flex-row px-2 items-center my-4`}>
          <img src={personalInf} alt="no found" className="h-8" />
          <Link>Datos Personales</Link>
        </div>
        <div className={`${stylesDiv}`}>
        <img src={permission} alt="no found" className="h-8" />
        <Link>Tu información y permisos</Link>
        </div>
      </section>
    </main>
  );
}
