const Project = ({name, img, repository}) => {

  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div style={styles} className="text-center h-28 sm:h-40 rounded-md">
      <p>{ name }</p>
    </div>
  )
}

export default Project