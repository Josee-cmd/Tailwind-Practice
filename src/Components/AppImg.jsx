// import img from "../assets/facebook.webp";
import fc from "../assets/Icons/Facebook.png"
function AppImg() {
  return (
    <div className="w-60 lg:w-1/2 mx-5 lg:mb-28 flex flex-col items-center">
      <h1 className="text-6xl font-bold text-blue-500 hidden lg:block my-5 xl:pr-72">
        facebook
      </h1>
      <p className="text-3xl hidden lg:block ">
        Josan te ayuda a comunicarte y compartir con las personas que forman
        parte de tu vida.
      </p>
      <img src={fc} alt="Not found" className="lg:hidden w-1/2 py-10" />
    </div>
  );
}

export default AppImg;
