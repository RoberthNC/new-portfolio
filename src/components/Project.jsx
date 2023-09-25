import useApp from "../hooks/useApp"

const Project = ({name, img, repository}) => {

  const { language } = useApp()

  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div style={styles} className="text-center h-28 sm:h-40 rounded-md">
      <div className="bg-black h-full bg-opacity-30 flex flex-col items-center justify-center gap-3">
        <p className="bg-opacity-100 text-blue-100 text-center text-sm sm:text-base">{ name }</p>
        <a href={repository} target="_blank" className="bg-opacity-100 text-blue-100 border-[2px] p-1 hover:border-[#01be96] hover:bg-[#01be96] transition-colors duration-300 text-sm sm:text-base">{ language === 'es' ? 'Ver Código':'View Code' }</a>
      </div>
    </div>
  )
}

export default Project