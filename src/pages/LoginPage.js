import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("login successful");

      setRedirect(true);
    } catch (error) {
      alert("login failed");
    }
  };

  const navigate = useNavigate();

  if (redirect) {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex">
      <div className="mt-4 grow flex items-center justify-around">
        <div className="-mt-32">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form className="max-w-md mx-auto" onSubmit={submitHandler}>
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
            Don't have an accont yet?{" "}
            <Link to="/signup" className="underline text-black">
              Register Now{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
