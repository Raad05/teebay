/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login text-center mt-40">
      <h3 className="my-10 text-3xl">SIGN IN</h3>
      <form className="flex flex-col w-1/4 border m-auto p-10">
        <input
          className="p-2 border my-2"
          type="email"
          required
          placeholder="email address"
        />
        <input
          className="p-2 border my-2"
          type="password"
          required
          placeholder="password"
        />
        <button
          className="my-3 text-white bg-purple-600 p-2 rounded"
          type="submit"
        >
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <Link className="text-purple-600 font-bold" to="/signup">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
