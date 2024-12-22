import avatar from "../../../assets/images/avatar.svg";

function Avatar({ className, ...rest }) {
  return (
    <img
      style={{
        filter:
          "invert(100%) sepia(19%) saturate(0%) hue-rotate(46deg) brightness(104%) contrast(101%)",
      }}
      src={avatar}
      alt="avatar"
      className={className}
      {...rest}
    />
  );
}

export default Avatar;
