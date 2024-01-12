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
    <div className="w-full h-full grid grid-rows-2 border-0">
      <Outlet />
      <nav className="w-full h-full my-2 flex flex-wrap">
        <ul className="w-full flex justify-center h-full items-end pl-10 gap-5">
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
            <ul
              className={`items list-disc flex flex-col mx-5 flex-wrap invisible opacity-0 h-50 border border-black absolute`}
            >
              <li>Display</li>
              <li>Editor</li>
              <li>Theme</li>
              <li>Interface</li>
            </ul>
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
