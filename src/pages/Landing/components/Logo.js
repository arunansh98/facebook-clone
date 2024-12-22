import FacebookLogo from "../../../assets/images/facebook-logo.svg";

function Logo() {
  return (
    <div className="inline-block pr-[32px] pt-[112px] pb-[16px] w-[580px]">
      <img src={FacebookLogo} alt="logo" className="h-[106px] m-[-28px]" />
      <h1 className="!text-[28px] w-[500px] leading-[32px] font-secondary !font-normal mt-[1.2rem]">
        Facebook helps you connect and share with the people in your life.
      </h1>
    </div>
  );
}

export default Logo;
