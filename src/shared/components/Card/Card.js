import "./Card.css";
import classNames from "classnames";

function Card({ children, className }) {
  const cardClassName = classNames(className, "card");
  return <div className={cardClassName}>{children}</div>;
}

export default Card;
