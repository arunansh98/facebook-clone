import Login from "./components/Login/Login";
import Logo from "./components/Logo";

function Landing() {
  return (
    <div>
      <div className="h-3/6 m-auto bg-[#f0f2f5] pt-[72px] pb-[112px] min-h-[640px]">
        <div className="my-[0px] mx-[auto] w-[980px]">
          <Logo className="w-3/6" />
          <div className="inline-block align-middle">
            <Login className="w-3/6" />
            <span className="mt-6 text-[14px] flex justify-center">
              <a className="font-bold mr-1" href="##">
                Create a Page {"  "}
              </a>
              for a celebrity, brand or business.
            </span>
          </div>
        </div>
      </div>
      <div className="h-3/6 m-auto">Footer</div>
    </div>
  );
}

export default Landing;
