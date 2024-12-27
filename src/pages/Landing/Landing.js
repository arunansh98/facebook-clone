import Login from "./components/Login/Login";
import Logo from "./components/Logo";

function Landing() {
  return (
    <div className="bg-[#f0f2f5] min-h-screen">
      <div className="pt-8 pb-16 min-h-[640px] flex flex-col items-center justify-between sm:pt-12 sm:pb-24">
        <div className="w-full px-4 sm:px-8 md:max-w-screen-md lg:max-w-screen-lg">
          {/* Logo Section */}
          <div className="mb-6 flex justify-center sm:mb-10">
            <Logo className="w-3/4 sm:w-2/4 md:w-1/3" />
          </div>

          {/* Login Section */}
          <div className="bg-white p-6 rounded-md shadow-md w-full sm:w-3/4 md:w-1/2 mx-auto">
            <Login />
          </div>

          {/* Create Page Link */}
          <span className="mt-6 text-[14px] flex justify-center">
            <a
              className="font-bold mr-1 text-blue-600 hover:underline"
              href="##"
            >
              Create a Page{" "}
            </a>
            for a celebrity, brand, or business.
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 text-center py-4">
        <span className="text-sm text-gray-600">Footer</span>
      </div>
    </div>
  );
}

export default Landing;
