import AppImg from './AppImg';
import Form from './Form';
/*-----------------------------------*/
function AppComponents() {
  return (
    <div className='w-5/6 border flex flex-col items-center my-5 rounded-2xl lg:w-4/5 lg:flex-row lg:justify-start h-5/6'>
        <AppImg/>
        <Form/>
    </div>
  )
}

export default AppComponents