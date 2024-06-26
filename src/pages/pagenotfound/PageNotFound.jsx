import React from "react";
import DocumentTitle from "react-document-title";

const PageNotFound = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-warning">
        <DocumentTitle title={"Page not found | Smart stock"} />
        <h1 className="card p-3 bg-danger text-white">404 page not found</h1>
      </div>
    </>
  );
};

export default PageNotFound;
