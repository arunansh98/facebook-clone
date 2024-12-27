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
    "w-full sm:w-[364px] rounded-[6px] mb-4 py-[14px] px-[16px]",
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
    <div
      id="home"
      className="login-container flex flex-col items-center px-4 py-6 sm:py-10"
    >
      <form className="w-full max-w-xs sm:max-w-sm">
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
          className="text-white text-md font-bold bg-blue hover:bg-blue-700 border-blue-600 w-full py-2 rounded-[6px] mb-4"
        >
          Log in
        </button>
      </form>
      <button className="mb-4 text-blue text-sm hover:underline">
        Forgotten password?
      </button>
      <hr className="w-full max-w-xs sm:max-w-sm mb-6 border-gray-300" />
      <button
        onClick={() => setShowSignUpModal(true)}
        className="text-white text-md font-bold bg-green hover:bg-green-700 border-green-600 w-full py-2 rounded-[6px]"
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
