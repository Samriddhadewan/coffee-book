import banner from "../../assets/banner.jpg"

const Banner = () => {
  const style = {
    backgroundImage : `url(${banner})`,
    backgroundSize : 'cover',
    backgroundPosition : "center",
    height : '600px'
  }
  
    return (
    <div style={style}></div>
  )
}

export default Banner