export function Month() {
    const month = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
    ];
  
    return <div className=" w-28 h-7 overflow-y-scroll border border-gray-300 rounded-md ease-in hover:h-72 duration-300 bg-white relative">
        {month.map((element)=>(
            <div key = {element} className="pl-2 cursor-pointer ">
                <p>{element}</p>
            </div>
        ))}
    </div>;
  }
  
