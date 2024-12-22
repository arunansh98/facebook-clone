import { useState } from "react";
import PasswordHide from "../../../assets/images/eye-password-hide.svg";
import classNames from "classnames";

function TextInput({ ...rest }) {
  const { className, ...inputRest } = rest;
  const isPassword = rest.type === "password" && rest?.value?.length > 0;
  const inputClassName = classNames(
    "!bg-transparent",
    isPassword && "!w-[93%] mr-1"
  );
  const divClassName = classNames("flex flex-row", className);
  const [showPassword, setShowPassword] = useState(false);
  const type = isPassword ? (showPassword ? "text" : "password") : rest.type;
  return (
    <div className={divClassName}>
      <input className={inputClassName} {...inputRest} type={type} />
      {isPassword && (
        <img
          onClick={() => setShowPassword(!showPassword)}
          className="w-[7%] cursor-pointer"
          src={PasswordHide}
          alt="hide"
        />
      )}
    </div>
  );
}

export default TextInput;
