import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/pageSlice";
import { createFakePhoto } from "../util";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
        exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
        className="detail-container"
      >
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
              <span>Employee Description:</span>
              {selectedEmployee.desc}
            </h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Detail;
