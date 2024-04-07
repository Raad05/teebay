import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";

const SIGNUP = gql`
  mutation Signup($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      email
    }
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [isMatched, setIsMatched] = useState("");
  const [createUser] = useMutation(SIGNUP);

  const signup = async () => {
    try {
      await createUser({ variables: { input: formData } });
    } catch (e) {
      alert("Failed to signup");
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

  const checkPassword = (e) => {
    const { value } = e.target;
    if (formData.password !== value) {
      setIsMatched("Password does not match");
    } else {
      setIsMatched("Password matched");
    }
  };

  return (
    <div className="signup text-center mt-40">
      <h3 className="my-10 text-3xl">SIGN UP</h3>
      <form
        onSubmit={signup}
        className="flex flex-col w-1/3 border m-auto p-10"
      >
        <div className="flex my-2">
          <input
            className="w-full mr-3 border p-2"
            type="text"
            placeholder="first name"
            onChange={handleInput}
            name="firstName"
          />
          <input
            className="w-full ml-3 border p-2"
            type="text"
            placeholder="last name"
            onChange={handleInput}
            name="lastName"
          />
        </div>
        <input
          className="p-2 border my-2"
          type="text"
          required
          onChange={handleInput}
          placeholder="address"
          name="address"
        />
        <div className="flex my-2">
          <input
            className="w-full mr-3 border p-2"
            type="email"
            placeholder="email"
            onChange={handleInput}
            name="email"
          />
          <input
            className="w-full ml-3 border p-2"
            type="text"
            placeholder="phone number"
            onChange={handleInput}
            name="phoneNumber"
          />
        </div>
        <input
          className="p-2 border my-2"
          type="password"
          required
          onChange={handleInput}
          placeholder="password"
          name="password"
        />
        <input
          className="p-2 border my-2"
          type="password"
          required
          placeholder="confirm password"
          onChange={checkPassword}
          name="confirmPassword"
        />
        {isMatched === "Password matched" ? (
          <>
            <p className="text-green-500">{isMatched}</p>
          </>
        ) : (
          <p className="text-red-500">{isMatched}</p>
        )}
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
