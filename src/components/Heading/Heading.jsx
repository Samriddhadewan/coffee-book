
const Heading = ({title, paragraph}) => {
  return (
    <div className="text-center my-5">
        <h1 className="text-4xl my-4  font-thin"> {title}</h1>
        <p className="text-base font-thin">{paragraph}</p>
    </div>
  )
}

export default Heading