import { useLoaderData, useParams } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useEffect, useState } from "react";

const CategoryCards = () => {
  const params = useParams();
  const [coffees, setCoffees] = useState([])
  const data = useLoaderData();
  const { category } = params;
  
  
  useEffect( ()=> {
      if(category){
        const FilteredCoffees = [...data].filter(coffee => coffee.category === category);
    setCoffees(FilteredCoffees)
      }
      else{
        setCoffees(data)
      }
  },[category, data])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {coffees.map((coffee, idx) => (
        <CoffeeCard key={idx} coffee={coffee}></CoffeeCard>
      ))}
    </div>
  );
};

export default CategoryCards;
