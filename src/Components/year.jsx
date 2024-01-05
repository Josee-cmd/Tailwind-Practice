export function Year() {
    const year = [
      2000, 2001, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
      2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
    ];
  
    return <div className=" w-28 h-7 overflow-y-scroll border border-gray-300 rounded-md ease-in hover:h-72 duration-300 bg-white mx-2 relative">
        {year.map((element)=>(
            <div key = {element} className="pl-2 cursor-pointer ">
                <p>{element}</p>
            </div>
        ))}
    </div>;
  }
  
