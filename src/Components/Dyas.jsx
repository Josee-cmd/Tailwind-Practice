export function Days() {
    const days = [
     1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
    ];
  
    return <div className="w-28 h-7 overflow-y-scroll border border-gray-300 rounded-md ease-in hover:h-72 duration-300 bg-white mx-2 relative">
        {days.map((element)=>(
            <div key = {element} className="pl-2 cursor-pointer ">
                <p>{element}</p>
            </div>
        ))}
    </div>;
  }
  
