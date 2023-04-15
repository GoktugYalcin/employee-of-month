import React from "react";
import "./styles/App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { employeesQuery } from "./Apollo/apollo";
import { setEmployees } from "./redux/employeesSlice";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { AnimatePresence } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  const { employees } = useSelector((state: any) => state.employees);
  const pageSlice = useSelector((state: any) => state.page);

  const { loading } = useQuery(employeesQuery, {
    skip: employees.length,
    onCompleted: (data) => {
      if (!employees.length) {
        dispatch(setEmployees(data?.getEmployees.slice(0, 20)));
      }
    },
  });

  return (
    <>
      <main className="main-header">
        <h1>Choose the Staff of Month!</h1>
      </main>
      <main className={"main-container"}>
        <AnimatePresence>
          {pageSlice?.page === "home" ? <Home loading={loading} /> : <Detail />}
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
