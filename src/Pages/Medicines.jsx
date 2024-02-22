import { TypeMedicine } from '../Components/TypeMedicine'
import {Buttons} from '../Components/Buttons'
export const Medicines = () => {
    const styleInput = 'w-full p-3 border border-black my-2 rounded-lg outline-none';
//Pils form
    return (
        <div className="w-full h-full my-8">
            <p className="logo mx-8">Josan</p>
            <header className=" py-4 text-2xl flex justify-center items-center font-medium border-b">
                <p>Registrar Medicamentos</p>
            </header>
            <main>
                <form action="" className="flex flex-col flex-wrap mx-5 my-5 justify-center">
                    <label htmlFor="pils">
                        Medicamentos
                    </label>
                    <input type="text" id="pils" placeholder="Ingrese el nombre del medicamento" className={`${styleInput}`}/>
                    <label htmlFor="" className='my-2'>Tipo de medicamento</label>
                    <TypeMedicine />
                    <label htmlFor="">Asignado por</label>
                    <input type="text" placeholder='Nombre del medico' className={`${styleInput}`}/>
                    <label htmlFor="">Dosificación</label>
                    <input type="text" placeholder='Ingrese la dosificación' className={`${styleInput}`} />
                    <label htmlFor="">Descripcion</label>
                    <textarea name="" id="" cols="30" rows="8" className='border border-black rounded-lg mx-5 px-5 py-2' placeholder='Instrucciones sobre el medicamento'>
                    </textarea>
                    <div className='w-full h-auto my-5 flex flex-wrap justify-center items-center'>
                    <Buttons label='Registrar'/>
                    </div>
                </form>
            </main>
        </div>
    )
}