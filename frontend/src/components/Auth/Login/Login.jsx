/* eslint-disable react/no-unescaped-entities */
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LOGIN_USER = gql`
  mutation login($input: LoginUserInput!) {
    loginUser(input: $input) {
      id
      firstName
      lastName
      email
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({});
  const [loginUser] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ variables: { input: formData } });
      localStorage.setItem("user", JSON.stringify(response.data.loginUser));
      navigate("/products");
      window.location.reload();
    } catch (e) {
      alert(e.message);
      console.log(e);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="login text-center mt-40">
      <h3 className="my-10 text-3xl">SIGN IN</h3>
      <form
        onSubmit={signIn}
        className="flex flex-col w-1/4 border m-auto p-10"
      >
        <input
          className="p-2 border my-2"
          type="email"
          required
          placeholder="email address"
          name="email"
          onChange={handleInput}
        />
        <input
          className="p-2 border my-2"
          type="password"
          required
          placeholder="password"
          name="password"
          onChange={handleInput}
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
