import classNames from "classnames";
import { AiOutlinePlus } from "react-icons/ai";

function BlueOutlineAnchor({ label, value, href, className, onClick }) {
  const blueOutline = (
    <AiOutlinePlus className="h-[24px] w-[24px] mr-2 p-[4px] border-blue border-solid border-[2px] rounded-[100px]" />
  );
  const anchorClassName = classNames(
    label && "mt-4",
    "flex flex-row text-blue items-center cursor-pointer hover:underline"
  );
  return (
    <div className={className}>
      {label && <h3 className="font-[600]">{label}</h3>}
      <a
        className={anchorClassName}
        href={href ? href : null}
        onClick={onClick}
      >
        {" "}
        {blueOutline}
        <span className="font-[600] text-primary">{value}</span>
      </a>
    </div>
  );
}

export default BlueOutlineAnchor;
