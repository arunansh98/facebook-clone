import React from "react";
import ReactDOM from "react-dom";
import "./AttachableModal.css";
import classNames from "classnames";

const AttachableModal = ({
  targetElementRef,
  children,
  alignVertically,
  alignHorizontally,
  className,
}) => {
  className = classNames(className, "attachable-modal");
  const calculatePosition = () => {
    if (!targetElementRef?.current) return null;

    const targetRect = targetElementRef?.current?.getBoundingClientRect();

    let modalStyle = {
      position: "absolute",
    };

    let horizontalStyle = {
      right: {
        right: `${
          window.innerWidth -
          targetRect.left -
          targetElementRef?.current?.offsetWidth
        }px`,
      },
      left: { left: `${targetRect.left + window.scrollX}px` },
      center: {
        left: `${targetRect.left + targetRect.width / 2}px`,
        transform: "translateX(-50%)",
      },
    };

    let verticalStyle = {
      below: {
        top: `${targetRect.bottom}px`,
      },
      above: {
        bottom: `${window.innerHeight - targetRect.top}px`,
      },
    };

    modalStyle = {
      ...modalStyle,
      ...verticalStyle?.[alignVertically],
      ...horizontalStyle?.[alignHorizontally],
    };

    return modalStyle;
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div
          id="attachable-modal"
          className={className}
          style={calculatePosition()}
        >
          <div className="modal-content">{children}</div>
        </div>,
        document.body
      )}
    </>
  );
};

export default AttachableModal;
