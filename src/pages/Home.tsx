import React, { useMemo } from "react";
import Employee from "../interfaces/Employee";
import { useDispatch, useSelector } from "react-redux";
import EmployeeCard from "../components/EmployeeCard";

interface HomeProps {
  loading: string | boolean;
}

const Home: React.FC<HomeProps> = ({ loading }) => {
  const { employees } = useSelector((state: any) => state.employees);

  const sortedEmployees = useMemo(() => {
    if (employees.length) {
      return [...employees].sort(
        (a: Employee, b: Employee) => b.votes - a.votes
      );
    }
  }, [employees]);

  return (
    <>
      {!loading &&
        sortedEmployees?.map((employee: Employee, index: number) => (
          <EmployeeCard employee={employee} key={employee.id} />
        ))}
    </>
  );
};

export default Home;
