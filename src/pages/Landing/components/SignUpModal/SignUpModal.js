import Modal from "../../../../shared/components/Modal/Modal";
import Close from "../../../../assets/images/close.png";
import classNames from "classnames";
import TextInput from "../../../../shared/components/TextInput/TextInput";
import DropDown from "../../../../shared/components/DropDown/DropDown";
import { useReducer } from "react";
import { GoQuestion } from "react-icons/go";
import MultiRadio from "../../../../shared/components/MultiRadio/MultiRadio";
import "./SignUpModal.css";
import { produce } from "immer";
import { validator } from "./SignUpModalValidator";
import { options } from "./SignUpModalOptions";
import { useSignupMutation } from "../../../../store";
import useNavigateHook from "../../hooks/use-navigate-hook";

const FIRST_NAME = "firstName";
const SURNAME = "surName";
const MOBILE_NUMBER_EMAIL = "email";
const NEW_PASSWORD = "password";
const DATE_OF_BIRTH = "dateOfBirth";
const MONTH = "month";
const YEAR = "year";
const GENDER = "gender";
const PRONOUN = "pronoun";
const GENDER_OPTIONAL = "genderOptional";

const reducer = (state, action) => {
  state[action?.type] = action?.payload;
  return;
};

function SignUpModal({ onClose }) {
  const inputClassNames = classNames(
    "rounded-[5px] w-[194px] h-[40px] p-[11px] font-secondary text-primary",
    "border bg-[#f5f6f7]",
    "focus-within:outline-none"
  );

  const dropDownClassNames = classNames(
    "flex flex-row border items-center font-secondary text-primary",
    "w-[125px] h-[36px] justify-between rounded-[5px]"
  );

  const radioClassNames = classNames(
    "flex flex-row border items-center font-secondary text-primary",
    "w-[125px] h-[36px] justify-between rounded-[5px] px-[10px]"
  );

  const anchorClassNames = classNames("text-[#385898] hover:underline");

  const [state, dispatch] = useReducer(produce(reducer), {
    [FIRST_NAME]: "",
    [SURNAME]: "",
    [MOBILE_NUMBER_EMAIL]: "",
    [NEW_PASSWORD]: "",
    [DATE_OF_BIRTH]: "",
    [MONTH]: "",
    [YEAR]: "",
    [GENDER]: "",
    [PRONOUN]: "",
    [GENDER_OPTIONAL]: "",
  });

  const showPronounSection = state.gender === "custom";

  const {
    dateOfBirthOptions,
    monthOptions,
    yearOptions,
    genderOptions,
    pronounOptions,
  } = options();

  const [signup, results] = useSignupMutation();

  // handle navigation once signup is successful
  useNavigateHook(results);

  const getFieldValue = (id) => {
    return state?.[id];
  };

  const setFieldValue = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  const handleSubmit = (event = undefined) => {
    if (event) {
      event.preventDefault();
    }
    // call sign up api if form is valid
    if (validator(state)) {
      signup({ ...state });
    }
  };

  return (
    <Modal>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center px-3">
          <h1 className="font-secondary">Sign Up</h1>
          <img src={Close} alt="close" onClick={onClose} />
        </div>
        <div className="text-primary text-[#606770] font-secondary px-3">
          Its quick and easy.
        </div>
        <hr className="mt-2" />
        <div className="p-[16px]">
          <div className="flex flex-row mb-3">
            <TextInput
              className={inputClassNames + " mr-2"}
              type="text"
              placeholder="First Name"
              value={getFieldValue(FIRST_NAME)}
              onChange={(event) =>
                setFieldValue(FIRST_NAME, event.target.value)
              }
            />
            <TextInput
              className={inputClassNames}
              type="text"
              placeholder="Surname"
              value={getFieldValue(SURNAME)}
              onChange={(event) => setFieldValue(SURNAME, event.target.value)}
            />
          </div>
          <TextInput
            className={inputClassNames + " w-full mb-3"}
            type="text"
            placeholder="Mobile number or email address"
            value={getFieldValue(MOBILE_NUMBER_EMAIL)}
            onChange={(event) =>
              setFieldValue(MOBILE_NUMBER_EMAIL, event.target.value)
            }
          />
          <TextInput
            className={inputClassNames + " w-full mb-3"}
            type="password"
            placeholder="New password"
            value={getFieldValue(NEW_PASSWORD)}
            onChange={(event) =>
              setFieldValue(NEW_PASSWORD, event.target.value)
            }
          />
          <div className="flex flex-row justify-start items-center font-secondary text-[12px] text-[#606770]">
            Date of birth
            <GoQuestion
              className="ml-1 cursor-pointer"
              title="Click for more information"
            />
          </div>
          <div className="flex flex-row mb-3 justify-between">
            <DropDown
              className={dropDownClassNames}
              id={DATE_OF_BIRTH}
              options={dateOfBirthOptions}
              selected={getFieldValue(DATE_OF_BIRTH)}
              onChange={(value) => setFieldValue(DATE_OF_BIRTH, value)}
            />
            <DropDown
              className={dropDownClassNames}
              id={MONTH}
              options={monthOptions}
              selected={getFieldValue(MONTH)}
              onChange={(value) => setFieldValue(MONTH, value)}
            />
            <DropDown
              className={dropDownClassNames}
              id={YEAR}
              options={yearOptions}
              selected={getFieldValue(YEAR)}
              onChange={(value) => setFieldValue(YEAR, value)}
            />
          </div>
          <div className="flex flex-row justify-start items-center font-secondary text-[12px] text-[#606770]">
            Gender
            <GoQuestion
              className="ml-1 cursor-pointer bg-red"
              title="Click for more information"
            />
          </div>
          <div className="mb-3">
            <MultiRadio
              className={radioClassNames}
              id={GENDER}
              options={genderOptions}
              value={getFieldValue(GENDER)}
              onChange={(value) => setFieldValue(GENDER, value)}
            />
          </div>
          {showPronounSection && (
            <>
              <DropDown
                className={dropDownClassNames + " w-full"}
                id={PRONOUN}
                options={pronounOptions}
                selected={getFieldValue(PRONOUN)}
                onChange={(value) => setFieldValue(PRONOUN, value)}
                placeholder="Select your pronoun"
              />
              <p className="mt-1 mb-2 text-[12px] text-[#606770]">
                Your pronoun is visible to everyone.
              </p>
              <TextInput
                className={inputClassNames + " w-full mb-3"}
                type="text"
                placeholder="Gender (optional)"
                value={getFieldValue(GENDER_OPTIONAL)}
                onChange={(event) =>
                  setFieldValue(GENDER_OPTIONAL, event.target.value)
                }
              />
            </>
          )}{" "}
          <p className="text-[11px] text-[#777]">
            People who use our service may have uploaded your contact
            information to Facebook.{" "}
            <a className={anchorClassNames} href="learn more">
              Learn more
            </a>
          </p>
          <p className="text-[11px] text-[#777] my-[11px]">
            By clicking Sign Up, you agree to our
            <a href="terms" className={anchorClassNames}>
              {" "}
              Terms,{" "}
            </a>
            <a href="privacy" className={anchorClassNames}>
              Privacy Policy{" "}
            </a>
            and{" "}
            <a href="cookies" className={anchorClassNames}>
              Cookies Policy.{" "}
            </a>
            You may receive SMS notifications from us and can opt out at any
            time.
          </p>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="text-[#fff] text-[18px] font-bold font-secondary w-[194px] h-[36px] bg-[#00a400] hover:bg-gradient-to-r hover:from-[#79bc64] hover:to-[#578843] px-[32px] rounded-[6px] border-green"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignUpModal;
