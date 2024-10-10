import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Page not found</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default ErrorPage;
