import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    name: "Product 1",
    description: "Description 1",
    categories: ["a", "b", "c"],
    sellingPrice: 50,
    rentingPrice: 10,
    createdAt: "Demo",
    views: 0,
  },
  {
    name: "Product 2",
    description: "Description 2",
    categories: ["a", "b", "c"],
    sellingPrice: 50,
    rentingPrice: 10,
    createdAt: "Demo",
    views: 0,
  },
  {
    name: "Demo",
    description: "Demo",
    categories: ["a", "b", "c"],
    sellingPrice: 50,
    rentingPrice: 10,
    createdAt: "Demo",
    views: 0,
  },
];

const Records = () => {
  return (
    <div className="records mt-20">
      <h3 className="text-3xl text-center my-10">USER HISTORY</h3>
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} path="records"></ProductCard>
      ))}
    </div>
  );
};

export default Records;
