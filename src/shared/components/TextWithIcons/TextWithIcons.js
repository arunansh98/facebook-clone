import classNames from "classnames";

function TextWithIcons({
  leftIcon: LeftIcon,
  label,
  value,
  rightIcons,
  className,
}) {
  let Left, Right;

  if (rightIcons) {
    Left = rightIcons.left;
    Right = rightIcons.right;
  }

  let leftClassName = "mr-1 p-1 h-[22px] w-[22px] rounded-[10px]";
  let rightClassName = "p-[4px] h-[32px] w-[32px] rounded-[50px]";

  if (!LeftIcon) {
    LeftIcon = "div";
  }

  if (!Left) {
    Left = "div";
  } else {
    leftClassName = classNames(leftClassName, "hover:bg-grey cursor-pointer");
  }

  if (!Right) {
    Right = "div";
  } else {
    rightClassName = classNames(rightClassName, "cursor-pointer btn-secondary");
  }

  className = classNames(
    className,
    "flex flex-row justify-between items-center w-full"
  );

  return (
    <div className={className}>
      <div className="flex flex-row items-center">
        <LeftIcon className="h-[24px] w-[24px] mr-3 text-[#65676B]" />
        <span className="flex flex-col">
          <span className="text-primary">{label}</span>
          <span className="text-[13px]">{value}</span>
        </span>
      </div>
      <div className="flex items-center">
        <Left className={leftClassName} />
        <Right className={rightClassName} />
      </div>
    </div>
  );
}

export default TextWithIcons;
