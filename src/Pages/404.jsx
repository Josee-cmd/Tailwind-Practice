 import noFound from'../assets/404.png'
import {Link} from 'react-router-dom'
function NoFound() {
  return (
    <div className='h-full flex justify-center flex-col items-center'>
      <p className='text-6xl font-bold'>Oops!</p>
      <img src= {noFound} alt="Not found" className='w-80 h-80' />
      <p className='text-8xl font-bold p-3'>404</p>
      <p className='font-light'>Creo que tomaste el camino equivocado. <Link to = "/Tailwind-Practice/" className='hover:text-blue-500 underline'>Volvamos</Link></p>
    </div>
  )
}

export default NoFound