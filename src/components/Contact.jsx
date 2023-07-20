import { useState } from "react"

import CheckToast from "./CheckToast"
import ErrorToast from "./ErrorToast"

import { checkNotify } from "./CheckToast"
import { errorNotify } from "./ErrorToast"

const Contact = () => {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if([name, email, message].includes("")){
      errorNotify()
      return
    }

    checkNotify()
    setTimeout(()=>{
      setName("")
      setEmail("")
      setMessage("")
    },1500)
  }

  return (
    <>
      <div id="contact" className="bg-[#0a192f] h-screen flex flex-col justify-center gap-y-3 px-5 sm:px-[20%]">
        <div className="flex justify-start sm:justify-center">
          <p className="text-blue-100 text-3xl font-bold py-[5px] sm:text-center sm:mx-auto border-b-[3px] border-[#01be96] inline">Contact</p>
        </div>
        <p className="text-blue-100 text-base text-justify justify-normal sm:text-center">Do you have any question or want to work with me?</p>
        <div className="w-[98.5%] sm:w-[550px] mx-auto">
            <form className="flex flex-col gap-y-1 mt-3">
              <input type="text" placeholder="Name" className="bg-blue-100 text-gray-500 px-1 py-2 focus:outline-none" value={ name } onChange={ (e)=> setName(e.target.value) } />
              <input type="email" placeholder="Email" className="bg-blue-100 text-gray-500 px-1 py-2 focus:outline-none" value={ email } onChange={ (e)=> setEmail(e.target.value) } />
              <textarea placeholder="Message" className="bg-blue-100 text-gray-500 resize-none px-1 py-2 h-32 focus:outline-none" value={ message } onChange={ (e)=> setMessage(e.target.value) }></textarea>
              <div className="flex justify-end">
                  <input onClick={ handleSubmit } type="submit" value="Submit" className="inline-block border-[2px] px-5 py-2 mt-3 hover:border-[#01be96] hover:bg-[#01be96] transition-colors duration-300 text-blue-100 cursor-pointer" />
              </div>
            </form>
        </div>
      </div>
      <CheckToast />
      <ErrorToast />
    </>
  )
}

export default Contact