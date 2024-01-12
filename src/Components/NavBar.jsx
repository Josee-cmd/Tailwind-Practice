// NavBar.jsx
import { Link, Outlet } from "react-router-dom";
import { Icons } from "./Icons";
import {
  faHouse,
  faGear,
  faSquarePlus,
  faLock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
/*-----------------------------------------------------------------*/
function NavBar() {
  const css = "icons lg:text-xl lg:pr-2";
  return (
    <div className="w-full h-full grid grid-rows-2 border border-black">
      <div className="h-full border border-red-500 row-span-2">
      <Outlet />
      </div>
      <nav className="w-full h-full border border-black flex items-end ">
        <ul className="w-full h-auto flex pl-10 gap-5 border border-blue-500 ">
          <li>
            <Link to="home">
              <Icons
                css={`
                  ${css}
                `}
                icon={faHouse}
              />
              Home
            </Link>
          </li>
          <li>
            <Link to="User-Setting" className="gear">
              {" "}
              <Icons
                css={`
                  ${css}
                `}
                icon={faGear}
              />
            </Link>

          </li>
          <li>
            <Link to="user-create">
              {" "}
              <Icons
                css={`
                  ${css}
                `}
                icon={faSquarePlus}
              />{" "}
              Crear
            </Link>
          </li>
          <li>
            <Link to="user-profile" className="account">
              {" "}
              <Icons
                css={`
                  ${css}
                `}
                icon={faLock}
              />{" "}
            </Link>
          </li>
          <li>
            <Link to="user-theme">
              {" "}
              <Icons
                css={`
                  ${css}
                `}
                icon={faStar}
              />
              Favoritos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
