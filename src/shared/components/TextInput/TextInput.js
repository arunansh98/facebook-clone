import { useState } from "react";
import PasswordHide from "../../../assets/images/eye-password-hide.svg";
import classNames from "classnames";

function TextInput({ ...rest }) {
  const { className, ...inputRest } = rest;
  const isPassword = rest.type === "password" && rest?.value?.length > 0;
  const inputClassName = classNames(
    "!bg-transparent w-full",
    isPassword && "mr-2"
  );
  const divClassName = classNames("flex items-center", className);
  const [showPassword, setShowPassword] = useState(false);
  const type = isPassword ? (showPassword ? "text" : "password") : rest.type;

  return (
    <div className={divClassName}>
      <input
        className={inputClassName}
        {...inputRest}
        type={type}
        aria-label={rest.placeholder || "Input field"}
      />
      {isPassword && (
        <img
          onClick={() => setShowPassword(!showPassword)}
          className="w-5 h-5 cursor-pointer"
          src={PasswordHide}
          alt={showPassword ? "Hide password" : "Show password"}
        />
      )}
    </div>
  );
}

export default TextInput;
