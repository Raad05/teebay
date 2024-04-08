import { gql, useQuery } from "@apollo/client";
import ProductCard from "../ProductCard/ProductCard";

const PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      userId
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

const MyProducts = () => {
  const { data, loading } = useQuery(PRODUCTS);
  const userId = JSON.parse(localStorage.getItem("user")).id;

  if (loading) return <p>Loading...</p>;

  return (
    <div className="my-products mt-20">
      <h3 className="text-3xl text-center my-10">MY PRODUCTS</h3>
      {data.products
        .filter((product) => product.userId === userId)
        .map((product, idx) => (
          <ProductCard
            key={idx}
            product={product}
            path="myProducts"
          ></ProductCard>
        ))}
    </div>
  );
};

export default MyProducts;
