import React from "react";

const Loader: React.FC = () => {
  return (
    <React.Fragment>
      <div
        className="border-sky-800 animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-slate-800 rounded-full dark:text-slate-200"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  );
};

export default Loader;
