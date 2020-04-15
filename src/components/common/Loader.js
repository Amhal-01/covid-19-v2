import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-primary">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-light">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-dark">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default Loader;
