import img from "../assets/facebook.webp";
function AppImg() {
  return (
    <div className="w-60 lg:w-1/2 mx-5 lg:mb-28">
      <h1 className="text-6xl font-bold text-blue-500 hidden lg:block my-5">
        facebook
      </h1>
      <p className="text-3xl hidden lg:block ">
        Facebook te ayuda a comunicarte y compartir con las personas que forman
        parte de tu vida.
      </p>
      <img src={img} alt="Not found" className="lg:hidden" />
    </div>
  );
}

export default AppImg;
