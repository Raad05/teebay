import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup text-center mt-40">
      <h3 className="my-10 text-3xl">SIGN UP</h3>
      <form className="flex flex-col w-1/3 border m-auto p-10">
        <div className="flex my-2">
          <input
            className="w-full mr-3 border p-2"
            type="text"
            placeholder="first name"
          />
          <input
            className="w-full ml-3 border p-2"
            type="text"
            placeholder="last name"
          />
        </div>
        <input
          className="p-2 border my-2"
          type="text"
          required
          placeholder="address"
        />
        <div className="flex my-2">
          <input
            className="w-full mr-3 border p-2"
            type="email"
            placeholder="email"
          />
          <input
            className="w-full ml-3 border p-2"
            type="text"
            placeholder="phone number"
          />
        </div>
        <input
          className="p-2 border my-2"
          type="password"
          required
          placeholder="password"
        />
        <input
          className="p-2 border my-2"
          type="password"
          required
          placeholder="confirm password"
        />
        <button
          className="my-3 text-white bg-purple-600 p-2 rounded"
          type="submit"
        >
          Signup
        </button>
        <p>
          Already have an account?{" "}
          <Link className="text-purple-600 font-bold" to="/">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
