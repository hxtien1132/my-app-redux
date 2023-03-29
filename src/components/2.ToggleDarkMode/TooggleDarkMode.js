import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux-toolkit/globalSlice";
import Card from "../../uis/Card";
import useDarkMode from "../hooks/useDarkMode";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(); //false:white true:dark
  const globalOptions = useSelector((state) => state.global);
  console.log("globalOptions", globalOptions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  },[]);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return (
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default ToggleDarkMode;
