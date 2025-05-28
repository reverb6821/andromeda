import React from "react";

const Loader = () => {
    return (
        <React.Fragment>
            <div className="flex justify-center items-center h-screen" role='loader'>
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-t-transparent border-indigo-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-t-transparent border-pink-500 rounded-full animate-spin-slow"></div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Loader;
