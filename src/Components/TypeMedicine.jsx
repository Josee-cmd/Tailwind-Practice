export const TypeMedicine = () => {
    const type = ["Tabletas y cápsulas", "Jarabes y soluciones", "Inyectable", "Parches transdérmicos", "Supositorios", "Cremas y ungüentos", "Gotas oftálmicas", "Aerosoles y inhaladores"]

    return (
        <div className="container w-48 h-7 border border-gray-300 rounded-md bg-white flex justify-center items-center mb-2 relative">
            <select name="" id="" className="w-full flex justify-start pl-2"
                defaultValue={`type`}>
                <option value="type" disabled>
                    Tipo de mecamento
                </option>
                {
                    type.map((element) => (
                        <option key={element}>
                            {element}
                        </option>
                    ))
                }

            </select>
        </div>
    )
}