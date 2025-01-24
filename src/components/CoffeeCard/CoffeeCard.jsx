const CoffeeCard = ({ coffee }) => {
    const {id, name, image, category,ingredients,nutrition_info,origin,type,description,} = coffee || {}
  return <div>
    {name}
  </div>;
};

export default CoffeeCard;
