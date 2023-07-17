const Modal = () => {
  return (
    <div className="absolute z-10 bg-[#0a192f] h-screen w-full flex flex-col items-center justify-center gap-5">
        <a href="#" className="text-white text-base py-[8px] hover:border-b-[1px] hover:border-white">About me</a>
        <a href="#" className="text-white text-base py-[8px] hover:border-b-[1px] hover:border-white">Skills</a>
        <a href="#" className="text-white text-base py-[8px] hover:border-b-[1px] hover:border-white">Projects</a>
        <a href="#" className="text-white text-base py-[8px] hover:border-b-[1px] hover:border-white">Contact me</a>
    </div>
  )
}

export default Modal