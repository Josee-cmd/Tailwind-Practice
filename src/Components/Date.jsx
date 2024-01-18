export const DateComponent = () => {
  //Obtenemos la fecha y hora actual
  const fechaActual = new Date();

  const currentYear = () => {
    //Obtenemos el año
    const year = fechaActual.getFullYear();
    return year;
  };

  const currentMes = () => {
    //Obtenemos el mes
    const mes = fechaActual.getMonth();
    return mes + 1;
  };

  const currentDia = () => {
    //Obtenemos el dia del mes
    const day = fechaActual.getDate();
    return day;
  };
  const currentMonth = () => {
    //Creamos los meses del año
    const month = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    //Obtenemos el mes del año
    const mes = fechaActual.getMonth();
    const fullMont = `${month[mes]}`;

    return fullMont;
  };
  const currentDay = () => {
    //Creamos los semanas de la semana
    const semanas = [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ];
    //Obtenemos el dia de la semana
    const semana = fechaActual.getDay();
    const fullDay = `${semanas[semana]}`;
    return fullDay;
  };

  return (
    <div className="grid grid-rows-2 h-full">
      <div className="w-full flex justify-between py-1 text-sm font-medium items-center px-10">
        <p>{currentDay()}</p>
        <p>{currentMonth()}</p>
        <p>Año</p>
      </div>
      <div className="w-full flex justify-around items-center text-xl font-semibold">
        <p className=" border-r border-gray-500 tracking-widest w-16">
          {currentDia()}
        </p>
        <p>{currentMes()}</p>
        <p className="border-l border-gray-500 w-16 pl-7">{currentYear()}</p>
      </div>
    </div>
  );
};
