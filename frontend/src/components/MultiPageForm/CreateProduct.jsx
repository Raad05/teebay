import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const categoryOptions = [
  {
    value: "Electronics",
    label: "ELECTRONICS",
  },
  {
    value: "Furniture",
    label: "FURNITURE",
  },
  {
    value: "Home appliances",
    label: "HOME APPLIANCES",
  },
  {
    value: "Sporting goods",
    label: "SPORTING GOODS",
  },
  {
    value: "Outdoor",
    label: "OUTDOOR",
  },
  {
    value: "Toys",
    label: "TOYS",
  },
];

const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
    }
  }
`;

const CreateProduct = () => {
  const [formData, setFormData] = useState({});
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const navigate = useNavigate();

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user")).id;

    const sellingPrice = parseInt(formData.sellingPrice);
    const rentingPrice = parseInt(formData.rentingPrice);

    const dataBlob = {
      userId,
      ...formData,
      sellingPrice,
      rentingPrice,
    };
    try {
      await createProduct({ variables: { input: dataBlob } });
      alert("Product created successfully");
      navigate("/my-products");
      window.location.reload();
    } catch (e) {
      alert(e.message);
      console.log(e);
    }
    // console.log(dataBlob);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionInput = (options) => {
    setCategories(options);
    setFormData((prevData) => ({
      ...prevData,
      categories: options.map((option) => option.value),
    }));
  };

  const renderForm = () => {
    switch (page) {
      case 1:
        return (
          <div className="flex flex-col items-center mt-40">
            <h3 className="text-3xl my-5">Select a title for your product</h3>
            <input
              onChange={handleInput}
              className="border border-gray-400 p-2 text-xl w-1/2"
              type="text"
              placeholder="Title"
              name="name"
            />
            <button
              className="bg-purple-500 px-3 py-2 text-white rounded my-5"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center mt-40">
            <h3 className="text-3xl my-5">Select categories</h3>
            <Select
              className="text-xl w-1/2"
              options={categoryOptions}
              value={categories}
              onChange={handleOptionInput}
              isMulti={true}
            ></Select>
            <div>
              <button
                className="bg-purple-500 px-3 py-2 text-white rounded mx-2 my-5"
                onClick={prevPage}
              >
                Back
              </button>
              <button
                className="bg-purple-500 px-3 py-2 text-white rounded mx-2 my-5"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center mt-40">
            <h3 className="text-3xl my-5">Write a description</h3>
            <textarea
              onChange={handleInput}
              className="border border-gray-400 p-2 text-xl"
              cols="100"
              rows="10"
              placeholder="Description"
              name="description"
            ></textarea>
            <div>
              <button
                className="bg-purple-500 px-3 py-2 text-white rounded mx-2 my-5"
                onClick={prevPage}
              >
                Back
              </button>
              <button
                className="bg-purple-500 px-3 py-2 text-white rounded mx-2 my-5"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center mt-40">
            <h3 className="text-3xl my-5">Select Price</h3>
            <input
              onChange={handleInput}
              className="border border-gray-400 p-2 text-xl my-2"
              type="text"
              placeholder="Purchase price (Fixed)"
              name="sellingPrice"
            />
            <input
              onChange={handleInput}
              className="border border-gray-400 p-2 text-xl my-2"
              type="text"
              placeholder="Rent price ($/hr)"
              name="rentingPrice"
            />
            <div>
              <button
                className="bg-purple-500 px-3 py-2 text-white rounded mx-2 my-5"
                onClick={prevPage}
              >
                Back
              </button>
              <button
                className="bg-purple-500 px-3 py-2 text-white rounded mx-2 my-5"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="w-1/2 m-auto mt-40 text-xl">
            <h3 className="text-3xl my-5">Summary:</h3>
            <p className="my-2">Title: {formData.name}</p>
            <p className="my-2">
              Categories:{" "}
              {formData.categories.map((category, idx) =>
                idx === categories.length - 1 ? (
                  <span className="my-2" key={idx}>
                    {category}
                  </span>
                ) : (
                  <span className="my-2" key={idx}>
                    {category},{" "}
                  </span>
                )
              )}
            </p>
            <p className="my-2">Description: {formData.description}</p>
            <p className="my-2">
              Price: ${formData.sellingPrice} | To Rent: $
              {formData.rentingPrice}
            </p>
            <div>
              <button
                className="bg-purple-500 px-3 py-2 text-white rounded mx-2 my-5"
                onClick={prevPage}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-purple-500 px-3 py-2 text-white rounded mx-2 my-5"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="create-product">{renderForm()}</div>;
};

export default CreateProduct;
