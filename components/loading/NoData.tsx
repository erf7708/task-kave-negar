import React from "react";

function NoData() {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>This post is not available</p>
    </div>
  );
}

export default NoData;
