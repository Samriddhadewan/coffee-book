import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

const MainLayout = () => {
  return (
    <div>
        {/* navbar  */}
        <Navbar></Navbar>

        {/* daynamic section  */}
        <div className="min-h-[80vh]">

        </div>
        {/* footer  */}
        <Footer></Footer>
    </div>
  )
}

export default MainLayout 