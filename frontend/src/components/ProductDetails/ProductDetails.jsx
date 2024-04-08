import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const PRODUCT = gql`
  query GetProduct($id: Int!) {
    product(id: $id) {
      name
      userId
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
  const userId = JSON.parse(localStorage.getItem("user")).id;

  return (
    <div className="product-details w-1/2 mx-auto mt-20">
      {product.userId === userId && (
        <p className="text-2xl text-center text-green-500 my-10 font-bold">
          ThIS PRODUCT IS OWNED BY YOU
        </p>
      )}
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
      {product.userId !== userId && (
        <div className="flex justify-end my-10">
          <button className="m-3 text-white bg-purple-600 px-4 py-2 rounded">
            Buy
          </button>
          <button className="m-3 text-white bg-purple-600 px-4 py-2 rounded">
            Rent
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
