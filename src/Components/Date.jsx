export const DateComponent = () => {
  const currentDate = () => {
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

    const fechaActual = new Date();

    //Obtenemos el dia de la semana
    const semana = fechaActual.getDay();
    //Obtenemos el mes
    const mes = fechaActual.getMonth();
    //Obtenemos el dia del mes
    const day = fechaActual.getDate();
    //Obtenemos el año
    const year = fechaActual.getFullYear();

    //Resetiamos toda la fecha
    const fullYear = `${semanas[semana - 1]}, ${day} de ${month[mes]} de ${year}`;
    return fullYear;
  };

  return <p>{currentDate()}</p>;
};
