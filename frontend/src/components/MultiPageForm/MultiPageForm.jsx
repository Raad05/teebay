import { useState } from "react";

const MultiPageForm = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <div>
            <input
              onChange={handleInput}
              className="border border-gray-400"
              type="text"
              placeholder="Title"
              name="name"
            />
            <button onClick={nextPage}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <textarea
              onChange={handleInput}
              className="border border-gray-400"
              cols="100"
              rows="10"
              placeholder="Description"
              name="description"
            ></textarea>
            <button onClick={prevPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <input
              onChange={handleInput}
              className="border border-gray-400"
              type="text"
              placeholder="Selling Price"
              name="sellingPrice"
            />
            <input
              onChange={handleInput}
              className="border border-gray-400"
              type="text"
              placeholder="Renting Price"
              name="rentingPrice"
            />
            <button onClick={prevPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Summary</h3>
            <p>Title: {data.name}</p>
            <p>Categories:</p>
            <p>Description: {data.description}</p>
            <p>Selling price: {data.sellingPrice}</p>
            <p>Renting price: {data.rentingPrice}</p>
            <button onClick={prevPage}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multipage-form">
      <form onSubmit={handleSubmit} className="flex flex-col">
        {renderPage()}
      </form>
    </div>
  );
};

export default MultiPageForm;
