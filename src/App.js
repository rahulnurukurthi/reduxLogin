import React from "react";
import LoginPage from "./components/loginPage";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./loginReducer";
import EmployeeListPage from "./components/employeeListPage";

export default function App() {
  const user = useSelector(selectUser);
  return <div>{user ? <EmployeeListPage /> : <LoginPage />}</div>;
}
