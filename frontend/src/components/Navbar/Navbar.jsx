import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around py-5">
      <div className="nav-links">
        <Link
          to="/products"
          className="mx-2 font-bold p-2 border-2 border-black rounded"
        >
          ALL PRODUCTS
        </Link>
        <Link
          to="/my-products"
          className="mx-2 font-bold p-2 border-2 border-black rounded"
        >
          MY PRODUCTS
        </Link>
      </div>
      <button className="bg-orange-500 p-2 text-white font-bold rounded">
        LOGOUT
      </button>
    </div>
  );
};

export default Navbar;
