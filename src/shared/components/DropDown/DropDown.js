import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

function DropDown({ ...props }) {
  const { className, options, selected, onChange, placeholder, ...rest } =
    props;
  const [showOptions, setShowOptions] = useState(false);
  const dropDownEl = useRef();

  const label = options?.find((option) => selected === option?.key)?.label;

  const contentOptions = options.map((option) => {
    return (
      <div
        key={option.key}
        className="hover:bg-blue hover:text-white px-[10px]"
        onClick={() => onChange(option.key)}
      >
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    const handler = (event) => {
      if (!dropDownEl.current) {
        return;
      }

      if (!dropDownEl.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div
      className="relative cursor-pointer"
      ref={dropDownEl}
      onClick={() => setShowOptions(!showOptions)}
    >
      <button className={className + " p-[10px]"}>
        <div>{label || placeholder || "Select"}</div>
        <GoChevronDown />
      </button>
      {showOptions && (
        <div className="z-[1] absolute border w-full max-h-[199px] overflow-y-auto bg-[#fff] cursor-pointer font-secondary text-primary">
          <div className="flex flex-col" onClick={() => setShowOptions(false)}>
            {contentOptions}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
