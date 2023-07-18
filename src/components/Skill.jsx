const Skill = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 p-1 sm:p-3 border border-[#0a192f] shadow-2xl hover:scale-110 duration-700">
        <img src={ img } alt={ name } className="w-12 sm:w-16" />
        <p className="text-blue-100 text-base text-center">{ name }</p>
    </div>
  )
}

export default Skill