import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    setLoggedUser(getUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setLoggedUser(null);
    navigate("/");
  };

  return (
    <div className="navbar flex justify-around py-5">
      <div className="nav-links">
        <Link
          to="/products"
          className="mx-2 font-bold p-2 border-2 border-black rounded"
        >
          ALL PRODUCTS
        </Link>
        {loggedUser && (
          <>
            <Link
              to="/my-products"
              className="mx-2 font-bold p-2 border-2 border-black rounded"
            >
              MY PRODUCTS
            </Link>
            <Link
              to="/create-product"
              className="mx-2 font-bold p-2 border-2 border-black rounded"
            >
              CREATE PRODUCT
            </Link>
          </>
        )}
      </div>
      {loggedUser ? (
        <button
          onClick={logout}
          className="bg-orange-500 p-2 text-white font-bold rounded"
        >
          LOGOUT
        </button>
      ) : (
        <Link to="/" className="bg-orange-500 p-2 text-white font-bold rounded">
          LOGIN
        </Link>
      )}
    </div>
  );
};

export default Navbar;
