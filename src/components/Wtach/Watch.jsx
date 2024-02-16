import "./Watch.css";
const Watch = ({ watch }) => {
  console.log(watch);
  const { brand, model, price, movement } = watch;
  return (
    <div className="watch_container">
      <h3>Brand : {brand} </h3>
      <h4>Model : {model}</h4>
      <h4>Price : {price}</h4>
      <h4>Movement : {movement}</h4>
    </div>
  );
};

export default Watch;
