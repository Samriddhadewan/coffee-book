import { useLoaderData, useParams } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const CategoryCards = () => {
  const params = useParams();
  const coffees = useLoaderData();
  console.log(coffees);
  const { category } = params;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee, idx) => (
        <CoffeeCard 
        key={idx}
        coffee={coffee}
        
        ></CoffeeCard>
      ))}
    </div>
  );
};

export default CategoryCards;
