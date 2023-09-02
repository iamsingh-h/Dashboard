import React from 'react'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { FcGoogle} from 'react-icons/fc';
import { FaApple} from 'react-icons/fa';
import { auth } from '../firebase';


const googleSignIn  = () =>{
    const provider  = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}



function Signin() {
  return (
    <div className='flex'>
        <div className='left w-2/5 bg-black h-screen'>
            <h1 className='mt-96 text-7xl text-white text-center font-montserrat font-bold'>Board.</h1>
        </div>
        <div className='right w-3/5 bg-neutral-100 h-screen'>
            <div className='mt-48 ml-56'>
                <h1 className='font-montserrat text-4xl font-semibold'>Sign In</h1>
                <p className='font-lato'>Sign in to your account</p>
                <div className='flex space-x-6 mt-5'>
                    <button className='bg-white text-xs text-gray-400 px-7 py-2 rounded-lg flex space-x-2' onClick={googleSignIn}>
                        <FcGoogle/>
                        <p>Sign in with Google</p>
                    </button>
                    <button className='bg-white text-xs text-gray-400 px-7 py-2 rounded-lg flex space-x-2'>
                        <FaApple/>
                        <p>Sign in with Apple</p>
                    </button>
                </div>

                <form className='bg-white flex flex-col w-3/5 mt-4 p-7 rounded-lg'>
                        <label>Email address</label>
                        <input type='email' className='bg-neutral-100 rounded-lg py-1'></input>
                        <label className='mt-3'>Password</label>
                        <input type='password' className='bg-neutral-100 rounded-lg py-1'></input>
                        <span className="text-blue-400 text-sm my-2 cursor-pointer mt-3">Forgot Password?</span>
                        <button className="bg-black text-white my-2 py-2 rounded-md font-bold cursor-pointer mt-3">Sign In</button>
                </form>
                <div className='text-sm mt-2 ml-16'>
                    <span className='text text-gray-400'>Don't have an account?</span><span className='text-blue-400'>Register here</span>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Signin






