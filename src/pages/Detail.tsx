import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/pageSlice";
import { createFakePhoto } from "../util";

const Detail: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedEmployee } = useSelector((state: any) => state.page);

  return (
    <>
      <div
        className="go-back"
        onClick={() => dispatch(setPage({ page: "home" }))}
      >
        Go Back
      </div>
      <div className="detail-container">
        <div className="detail-container_inner">
          <img
            src={createFakePhoto(selectedEmployee.photo)}
            alt={selectedEmployee.name}
          />
          <div className="detail-container_info">
            <h1 className="detail-container_info-name">
              {selectedEmployee.name}
            </h1>
            <h2 className="detail-container_info-job">
              {selectedEmployee.job}
            </h2>
            <h3 className="detail-container_info-age">
              {selectedEmployee.age} years old
            </h3>
            <h3 className="detail-container_info-desc">
              <h3>Employee Description:</h3>
              {selectedEmployee.desc}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
