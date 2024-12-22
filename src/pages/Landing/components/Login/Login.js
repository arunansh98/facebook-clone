import { useState } from "react";
import TextInput from "../../../../shared/components/TextInput/TextInput";
import SignUpModal from "../SignUpModal/SignUpModal";
import classNames from "classnames";
import "./Login.css";
import { useLoginMutation } from "../../../../store";
import useNavigateHook from "../../hooks/use-navigate-hook";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [login, results] = useLoginMutation();

  console.log("results", results);

  // handle navigation once login is successful
  useNavigateHook(results);

  const textInputClassNames = classNames(
    "w-[364px] rounded-[6px] mb-4 py-[14px] px-[16px]",
    "border-not-focused",
    "focus-within:border-blue",
    "focus-within:caret-blue",
    "focus-within:outline-none",
    "focus-within:box-shadow"
  );

  const handleLogin = (event) => {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    login(body);
  };

  return (
    <div id="home" className="login-container">
      <form>
        <TextInput
          className={textInputClassNames}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address or phone number"
          type="text"
        />
        <TextInput
          className={textInputClassNames}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
        />
        <button
          onClick={handleLogin}
          className="text-[#fff] text-[20px] font-bold bg-blue border-blue w-[364px] py-[11px] px-[16px] rounded-[6px] mb-4"
        >
          Log in
        </button>
      </form>
      <button className="mb-4 text-blue text-[14px]">
        Forgotten password?
      </button>
      <hr className="mb-6" />
      <button
        onClick={() => setShowSignUpModal(true)}
        className="text-[#fff] text-[17px] font-bold bg-green py-[11px] px-[16px] rounded-[6px] border-green"
      >
        Create new account
      </button>
      {showSignUpModal && (
        <SignUpModal onClose={() => setShowSignUpModal(false)} />
      )}
    </div>
  );
}

export default Login;
