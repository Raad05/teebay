import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const PRODUCT = gql`
  query GetProduct($id: Int!) {
    product(id: $id) {
      name
      description
      categories
      sellingPrice
      rentingPrice
      createdAt
      views
    }
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(PRODUCT, {
    variables: { id: parseInt(id) },
  });

  if (loading) return <p>Loading...</p>;

  const product = data.product;

  return (
    <div className="product-details">
      <p className="text-xl font-bold">{product.name}</p>
      <p className="text-gray-500">
        Categories:{" "}
        {product.categories.map((category, idx) =>
          idx === product.categories.length - 1 ? (
            <span key={idx}>{category}</span>
          ) : (
            <span key={idx}>{category}, </span>
          )
        )}
      </p>
      <p>
        Price: ${product.sellingPrice} | Rent: ${product.rentingPrice}
      </p>
      <p className="my-3">{product.description}</p>
      <div className="flex justify-end">
        <button className="m-3 text-white bg-purple-600 px-4 py-2 rounded">
          Buy
        </button>
        <button className="m-3 text-white bg-purple-600 px-4 py-2 rounded">
          Rent
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
