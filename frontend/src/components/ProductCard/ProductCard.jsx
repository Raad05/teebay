/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

const ProductCard = ({ product, path }) => {
  const {
    name,
    description,
    categories,
    sellingPrice,
    rentingPrice,
    createdAt,
    views,
  } = product;

  const datePosted = new Date(createdAt);
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = datePosted.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="product-card border w-1/2 p-10 m-auto my-5">
      <div className="flex justify-between">
        <p className="text-xl font-bold">{name}</p>
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
      <p className="mr-1">
        Price: ${sellingPrice} | Rent: ${rentingPrice}
      </p>
      <p className="my-3">{description}</p>
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
              <button className="px-5 py-2 rounded bg-purple-600 mx-2 font-bold text-white">
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
