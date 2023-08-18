import React from "react";
import classnames from "classnames";

import Loader from "../Partials/Loader";
import DeleteModal from "./DeleteModal";
import useModal from "./useModal";

interface ModalProps {
  deleteModal?: boolean;
  primary?: boolean;
  secondary?: boolean;
  label: string;
  isLoading?: boolean;
  icon?: string;
  disabled?: boolean;
  customAction: () => void;
}

const Modal: React.FC<ModalProps> = ({
  primary,
  secondary,
  deleteModal,
  label,
  isLoading,
  icon,
  disabled,
  customAction,
}) => {
  const { isOpen, toggle } = useModal();
  return (
    <React.Fragment>
      <button
        onClick={toggle}
        disabled={disabled}
        className={classnames(
          "font-medium text-center inline-flex items-center rounded-md text-sm px-5 py-2.5 mr-2 mb-2 text-color",
          {
            "btn-primary ": primary === true,
            "btn-secondary": secondary === true,
            "btn-delete": deleteModal === true,
            "disabled:": disabled === true,
          }
        )}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {icon ? (
              <React.Fragment>
                <i
                  className={classnames(`${icon} mr-2`, {
                    "text-color": primary === true,
                    "text-sky-700": secondary === true,
                  })}
                />
                {label}
              </React.Fragment>
            ) : (
              `${label}`
            )}
          </React.Fragment>
        )}
      </button>
      {/* {!deleteModal ? 
        (
        <ModalBody isOpen={isOpen} toggle={toggle} customAction={customAction} />
        ) : (
          <DeleteModal isOpen={isOpen} toggle={toggle} customAction={customAction} />
      )} */}
      <DeleteModal
        isOpen={isOpen}
        toggle={toggle}
        customAction={customAction}
      />
    </React.Fragment>
  );
};

export default Modal;
