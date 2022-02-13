import React from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>Keep S.</h1>
      <div className={classes.icons}>
        <img src="images/react.svg" alt="" />
        <span>
          <FaPlus />
        </span>
        <img src="images/keep.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
