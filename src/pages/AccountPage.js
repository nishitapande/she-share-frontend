import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return useNavigate("/login");
  }
  return <div>Account page for {user.name} </div>;
};

export default AccountPage;
