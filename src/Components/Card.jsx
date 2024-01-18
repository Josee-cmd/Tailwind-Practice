import propTypes from "prop-types";
import sun from "../assets/Icons/dom.png";
import {Link} from 'react-router-dom'
/*--------------------------------------------------*/
export const Card = ({ src, content = "Default" }) => {
  return (
    <div className="h-40 border border-black grid grid-rows-3 rounded-2xl">
      <div className="grid grid-cols-2 h-12 my-2">
        <div className="flex justify-start ">
          <img src={`${src}`} alt="No found" className="w-14 mx-2" />
        </div>
        <div className="flex justify-end">
          <img src={sun} alt="No found" className="w-8 h-8 mx-2" />
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="border border-gray-300 my-10 w-40" />
      </div>
      <div className="flex justify-center items-center">
        <Link className="text-xl tracking-wide overflow-hidden text-center font-semibold">{content}</Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  src: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};
