import React, { memo } from "react";
import { increaseVote } from "../redux/employeesSlice";
import Employee from "../interfaces/Employee";
import { useDispatch } from "react-redux";
import { createFakePhoto } from "../util";
import { setPage } from "../redux/pageSlice";

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const dispatch = useDispatch();
  return (
    <div key={employee.id} className="list-item">
      <div
        className="list-item_info-left"
        onClick={() => {
          dispatch(setPage({ page: "detail", selectedEmployee: employee }));
        }}
      >
        <div className="list-item_info-left_photo">
          <img src={createFakePhoto(employee.photo)} alt={employee.name} />
        </div>
        <div className="list-item_info">
          <div className="list-item_info-inner">
            <h1 className="list-item_info-inner_name">{employee.name}</h1>
            <div className="list-item_info-inner_other">
              <h2 className="list-item_info-inner_job">{employee.job}</h2>
              <h3 className="list-item_info-inner_age">
                {employee.age} years old
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="list-item_info-vote"
        onClick={() => dispatch(increaseVote(employee.id))}
      >
        <h1 className="list-item_info-vote_count">{employee.votes}</h1>
        <h2 className="list-item_info-vote_label">Votes</h2>
      </div>
    </div>
  );
};

export default memo(
  EmployeeCard,
  (prevProps, nextProps) =>
    prevProps.employee.votes === nextProps.employee.votes
);
