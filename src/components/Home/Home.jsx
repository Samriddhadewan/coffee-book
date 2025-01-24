import { Outlet, useLoaderData } from 'react-router-dom'
import Banner from '../banner/Banner'
import Categories from '../Categories/Categories'
import Heading from '../heading/Heading'

const Home = () => {
  const categories = useLoaderData()
  console.log(categories)
  return (
    <div>     
    <Banner></Banner>
    <Heading title='Browse Coffee by Category' paragraph='Choose your desired coffee category to browse through specific Coffees that fit your taste'></Heading>
    {/* category tab section  */}
    <Categories categories={categories}></Categories>

    {/* nested tab section  */}
    <Outlet></Outlet>

  </div>
  )
}

export default Home