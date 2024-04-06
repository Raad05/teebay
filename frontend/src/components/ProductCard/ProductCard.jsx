/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const {
    name,
    description,
    categories,
    sellingPrice,
    rentingPrice,
    createdAt,
    views,
  } = product;
  return (
    <div className="product-card border w-1/2 p-10 m-auto my-5">
      <p className="text-xl font-bold">{name}</p>
      <div className="flex text-gray-500">
        <p className="mr-2">Categories:</p>
        {categories.map((category, idx) => (
          <p key={idx}>{category}, </p>
        ))}
      </div>
      <div className="flex text-gray-500">
        <p className="mr-1">Price: ${sellingPrice}</p>|
        <p className="ml-1">Rent: ${rentingPrice}</p>
      </div>
      <p className="my-3">{description}</p>
      <div className="flex justify-between my-5 text-gray-500">
        <p>Date posted: {createdAt}</p>
        <p>{views} views</p>
      </div>
    </div>
  );
};

export default ProductCard;
