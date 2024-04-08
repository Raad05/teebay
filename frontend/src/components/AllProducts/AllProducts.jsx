import { gql, useQuery } from "@apollo/client";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

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
      status
      views
    }
  }
`;

const AllProducts = () => {
  const { data, loading } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="all-products mt-20">
      <h3 className="text-3xl text-center my-10">ALL PRODUCTS</h3>
      {data.products.length > 0 ? (
        data.products.map((product, idx) => (
          <Link to={`/products/${product.id}`} key={idx}>
            <ProductCard product={product} path="allProducts"></ProductCard>
          </Link>
        ))
      ) : (
        <p className="text-2xl text-center mt-40 text-gray-400">
          No products found
        </p>
      )}
    </div>
  );
};

export default AllProducts;
