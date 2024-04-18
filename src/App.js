import { Route, Routes, Navigate } from "react-router-dom";

import axios from "axios";
import { UserContextProvider } from "./UserContext";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL = "http://localhost:5000/v1/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" exact element={<HomePage />} />
        </Route>
        <Route path="/signup" exact element={<SignUpPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      </Routes>
    </UserContextProvider>
  );
}

export default App;
