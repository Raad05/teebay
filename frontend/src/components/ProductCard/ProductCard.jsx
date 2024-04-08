/* eslint-disable react/prop-types */
import { gql, useMutation } from "@apollo/client";
import { MdDelete } from "react-icons/md";

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;

const ProductCard = ({ product, path }) => {
  const {
    id,
    name,
    description,
    categories,
    sellingPrice,
    rentingPrice,
    createdAt,
    status,
    views,
  } = product;
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const datePosted = new Date(createdAt);
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = datePosted.toLocaleDateString("en-US", dateOptions);

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteProduct({ variables: { id: id } });
      alert("Prouduct deleted successfully");
      window.location.reload();
    } catch (e) {
      alert(e.message);
      console.log(e);
    }
  };

  return (
    <div className="product-card border w-1/2 p-10 m-auto my-5">
      <div className="flex justify-between">
        <p className="text-xl font-bold">{name}</p>
        {status === "sold" && (
          <p className="text-xl border-2 border-red-400 text-red-400 p-2 rounded font-bold">
            SOLD
          </p>
        )}
        {path === "myProducts" && (
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="text-gray-600"
          >
            <MdDelete size={30}></MdDelete>
          </button>
        )}
      </div>
      <p className="text-gray-500">
        Categories:{" "}
        {categories.map((category, idx) =>
          idx === categories.length - 1 ? (
            <span key={idx}>{category}</span>
          ) : (
            <span key={idx}>{category}, </span>
          )
        )}
      </p>
      <p>
        Price: ${sellingPrice} | Rent: ${rentingPrice}
      </p>
      <p className="my-3">
        {description.slice(0, 200)}{" "}
        <span className="text-blue-400">Read more...</span>
      </p>
      {path !== "records" && (
        <div className="flex justify-between my-5 text-gray-500">
          <p>Date posted: {formattedDate}</p>
          <p>{views} views</p>
        </div>
      )}
      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4 text-xl">
            Are you sure you want to delete this product?{" "}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="px-5 py-2 rounded bg-red-500 mx-2 font-bold text-white">
                No
              </button>
              <button
                onClick={onDelete}
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

export default ProductCard;
