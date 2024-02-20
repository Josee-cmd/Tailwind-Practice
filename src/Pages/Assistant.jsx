import { Icons } from '../Components/Icons'
import { faFacebook, faGoogle, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { Buttons } from '../Components/Buttons'
export const Assistant = () => {
    const styleInput = 'w-full p-3 border border-black my-2 rounded-lg outline-none',
        css = "text-3xl";

    return (
        <div className="w-full h-full my-8">
            <p className="logo mx-8">Josan</p>
            <div className="py-4 text-2xl flex justify-center items-center font-medium border-b "><p className='p-3'>Registrar asistente</p></div>
            <form action="" className={`flex flex-col flex-wrap mx-5 my-5`}>
                <label htmlFor="cedula">
                    Cedula
                </label>
                <input name="cedula" id="cedula" type="number" placeholder="Ingrese la cedula" className={`${styleInput} `} autoComplete='off'

                />
                <label htmlFor="nombre">
                    Nombre
                </label>
                <input id="nombre" type="text" placeholder="Ingrese el nombre" className={`${styleInput}`} autoComplete='off' />
                <label htmlFor="lastName">Apellido</label>
                <input type="text" id="lastName" placeholder="Ingrese el apellido" className={`${styleInput}`} autoComplete='off' />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Ingrese el email" className={`${styleInput}`} autoComplete='off' />
                <label htmlFor="age">Edad</label>
                <input type="number" id="age" placeholder="Ingrese su edad" className={`${styleInput}`} autoComplete='off' />
                <label htmlFor="phone">Telefono</label>
                <input type="number" id="phone" placeholder="Ingrese el teléfono" className={`${styleInput}`} autoComplete='off' />

                <section className=' flex justify-evenly my-5 border-t border-b border-gray-500 p-3'>
                    <Icons css={`${css}`} icon={faFacebook} />
                    <Icons css={`${css}`} icon={faGoogle} />
                    <Icons css={`${css}`} icon={faCloud} />
                    <Icons css={`${css}`} icon={faXTwitter} />
                    <Icons css={`${css}`} icon={faInstagram} />
                </section>
                <div className='flex justify-center'>
                    <Buttons label={`Regístrar`} style={{
                        borderRadius: '18px',
                    }} />
                </div>
            </form>
        </div>
    )
}