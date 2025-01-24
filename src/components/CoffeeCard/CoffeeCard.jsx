const CoffeeCard = ({ coffee }) => {
    const {id, name, image, category,ingredients,nutrition_info,origin,type,description,} = coffee || {}
  return <div className="w-[200px] border border-emerald-400">
    <img className="w-[200px]" src={image} alt="" />
    <h1>{name}</h1>
  </div>;
};

export default CoffeeCard;
