import { gql, useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const PRODUCT = gql`
  query GetProduct($id: Int!) {
    product(id: $id) {
      id
      name
      userId
      description
      categories
      sellingPrice
      rentingPrice
      status
      createdAt
      views
    }
  }
`;

const BUY_PRODUCT = gql`
  mutation BuyProduct($id: Int!) {
    buyProduct(id: $id) {
      status
    }
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(PRODUCT, {
    variables: { id: parseInt(id) },
  });
  const [buyProduct] = useMutation(BUY_PRODUCT);

  if (loading) return <p>Loading...</p>;

  const product = data.product;
  const userId = JSON.parse(localStorage.getItem("user")).id;

  const onBuy = async (e) => {
    e.preventDefault();
    try {
      await buyProduct({ variables: { id: parseInt(id) } });
      alert("Product bought!");
      window.location.reload();
    } catch (e) {
      alert(e.message);
      console.log(e);
    }
  };

  return (
    <div className="product-details w-1/2 mx-auto mt-20">
      {product.userId === userId && (
        <p className="text-2xl text-center text-green-500 my-10 font-bold">
          ThIS PRODUCT IS OWNED BY YOU
        </p>
      )}
      {product.status === "sold" && (
        <p className="text-2xl text-center text-red-500 my-10 font-bold">
          ThIS PRODUCT IS ALREADY SOLD
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
      {product.userId !== userId && product.status !== "sold" && (
        <div className="flex justify-end my-10">
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="m-3 text-white bg-purple-600 px-4 py-2 rounded"
          >
            Buy
          </button>
          <button className="m-3 text-white bg-purple-600 px-4 py-2 rounded">
            Rent
          </button>
        </div>
      )}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4 text-xl">
            Are you sure you want to buy this product?
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="px-5 py-2 rounded bg-red-500 mx-2 font-bold text-white">
                No
              </button>
              <button
                onClick={onBuy}
                className="px-5 py-2 rounded bg-purple-600 mx-2 font-bold text-white"
              >
                Yes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;
