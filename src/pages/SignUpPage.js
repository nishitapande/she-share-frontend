import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Successful.Now you can login");
    } catch (error) {
      alert("Registration failed. Please try again later");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="mt-4 grow flex items-center justify-around">
        <div className="-mt-32">
          <h1 className="text-4xl text-center mb-4">Register Now</h1>
          <form className="max-w-md mx-auto" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="primary">
              Login
            </button>
          </form>
          <div className="text-center py-2 text-gray-500">
            Already have an accont?{" "}
            <Link to="/login" className="underline text-black">
              Login{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
