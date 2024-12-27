import FacebookLogo from "../../../assets/images/facebook-logo.svg";

function Logo() {
  return (
    <div className="inline-block pr-0 pt-12 pb-6 w-full text-center sm:pr-8 sm:pb-4 sm:w-[580px]">
      <img
        src={FacebookLogo}
        alt="logo"
        className="h-20 mx-auto sm:h-[106px] sm:mb-4"
      />
      <h1 className="text-lg sm:text-[28px] leading-6 sm:leading-[32px] font-secondary font-normal mt-4 mx-auto max-w-[80%] sm:max-w-[500px]">
        Facebook helps you connect and share with the people in your life.
      </h1>
    </div>
  );
}

export default Logo;
