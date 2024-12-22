import classNames from "classnames";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, onClose, className }) {
  className = classNames(
    className ? className : "",
    "fixed m-auto h-[fit-content] w-[430px] inset-0 rounded-[6px] bg-white modal-box-shadow"
  );
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onClose}
      ></div>
      <div className={className}>
        <div className="flex flex-col justify-between">{children}</div>
      </div>
    </div>,
    document.querySelector(".modal")
  );
}

export default Modal;
