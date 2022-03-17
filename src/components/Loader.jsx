import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="spinner-border text-gray" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;