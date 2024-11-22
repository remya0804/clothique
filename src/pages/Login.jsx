import React, { useState } from 'react'

const Login = () => {

  const [loginState,setLoginState] = useState('Sign Up');

  const onSubmitHandler = async (e) => {

    e.preventDefault();

  }



  return (

    <form onSubmit={() => onSubmitHandler(e)} className='flex flex-col items-center gap-4 w-full sm:max-w-96 m-auto mt-14 text-gray-700'>

      <div className='inline-flex items-center gap-2 mb-2 mt-10'>

        <p className='prata-regular text-3xl '> {loginState}     </p>

        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />


      </div>

      {
        loginState === 'Login' 
        
        ? ""

        :<input type="text" className='w-full px-3 py-2 border border-gray-800' required placeholder='Name'/>
      }

      
      <input type="email" className='w-full px-3 py-2 border border-gray-800' required placeholder='Email'/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' required placeholder='Password'/>

      <div className='w-full flex justify-between text-sm mt-[8px]'>

        <p className='cursor-pointer'> Forgot your password?</p>

        {

          loginState === 'Login'

          ? <p onClick={() => setLoginState('Sign Up')} className='cursor-pointer underline text-blue-600'> Create new account </p>
          : <p onClick={() => setLoginState('Login')} className='cursor-pointer underline text-blue-600'> Login here </p>
        }


      </div>

      <button  className='bg-black text-white font-light px-8 py-2 mt-4'>{loginState === 'Login' ? 'Sign In' : "Sign Up"} </button>


    </form>
  )
}

export default Login