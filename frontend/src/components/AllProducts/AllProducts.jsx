import { gql, useQuery } from "@apollo/client";
import ProductCard from "../ProductCard/ProductCard";

const PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
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

const AllProducts = () => {
  const { data } = useQuery(PRODUCTS);

  return (
    <div className="all-products mt-20">
      <h3 className="text-3xl text-center my-10">ALL PRODUCTS</h3>
      {data.products.map((product, idx) => (
        <ProductCard
          key={idx}
          product={product}
          path="allProducts"
        ></ProductCard>
      ))}
    </div>
  );
};

export default AllProducts;
