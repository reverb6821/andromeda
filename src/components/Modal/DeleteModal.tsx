import React, { ReactNode } from "react";

interface DeleteModalProps {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  customAction: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  toggle,
  customAction,
}) => {
  return (
    <React.Fragment>
      {isOpen && (
        <React.Fragment>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none dark:text-slate-200"
            onClick={toggle}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                <div className="bg-slate-200 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative dark:bg-slate-800">
                  <div className="md:flex items-center">
                    <div className="flex items-center justify-center flex-shrink-0 mx-auto">
                      <i className="ri-alert-line mx-auto mb-4 text-4xl text-color p-5 m-2"></i>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                      <p className="font-bold">Delete</p>
                      <p className="text-sm text-color mt-1">
                        You will lose this data. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                    <button
                      onClick={customAction}
                      className="font-medium text-center inline-flex items-center rounded-md text-sm px-5 py-2.5 mr-2 mb-2 text-color btn-delete"
                    >
                      <i className="text-color mr-2 ri-alert-line" />
                      Delete
                    </button>
                    <button
                      onClick={toggle}
                      className="font-medium text-center inline-flex items-center rounded-md text-sm px-5 py-2.5 mr-2 mb-2 text-color btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default DeleteModal;
