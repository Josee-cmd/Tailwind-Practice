import propTypes from "prop-types";
import sun from "../assets/Icons/dom.png";
export const Card = ({ src, content = "Default" }) => {
  return (
    <div className="h-36 border border-black grid grid-rows-3 rounded-2xl relative bottom-10">
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
      <div className="flex justify-center items-center flex-wrap ">
        <p className="text-base text-ellipsis overflow-hidden">{content}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  src: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};
