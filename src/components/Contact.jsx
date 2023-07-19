const Contact = () => {
  return (
    <div id="contact" className="bg-[#0a192f] h-screen flex flex-col justify-center gap-y-3 px-5 sm:px-[20%]">
        <p className="text-blue-100 w-[110px] text-3xl font-bold border-b-[3px] border-[#01be96] py-[5px] sm:text-center sm:mx-auto inline">Contact</p>
        <p className="text-blue-100 text-base text-justify justify-normal sm:text-center">Do you have any questions or want to work with me?</p>
        <div className="w-[98.5%] sm:w-[550px] mx-auto">
            <form className="flex flex-col gap-y-1 mt-3">
                <input type="text" placeholder="Name" className="bg-blue-100 text-gray-500 px-1 py-2 focus:outline-none" />
                <input type="text" placeholder="Email" className="bg-blue-100 text-gray-500 px-1 py-2 focus:outline-none" />
                <textarea placeholder="Message" className="bg-blue-100 text-gray-500 resize-none px-1 py-2 h-32 focus:outline-none"></textarea>
                <div className="flex justify-end">
                    <input type="submit" value="Submit" className="inline-block border-[2px] px-5 py-2 mt-3 hover:border-[#01be96] hover:bg-[#01be96] transition-colors duration-300 text-blue-100" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact