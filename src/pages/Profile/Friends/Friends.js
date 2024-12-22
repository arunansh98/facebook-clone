import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Card from "../../../shared/components/Card/Card";

function Friends() {
  return (
    <div className="py-[2rem]">
      <Card className="p-[15px] ">
        <div className="flex flex-row justify-between items-center">
          <h2>Friends</h2>
          <div className="flex items-center ">
            <button className="transparent-button text-blue hover:bg-grey py-2 px-4 rounded mr-2">
              Friend Requests
            </button>
            <button className="transparent-button text-blue hover:bg-grey py-2 px-4 rounded mr-2">
              Find Friends
            </button>
            <button className="btn-secondary px-4 rounded">
              <HiOutlineDotsHorizontal />
            </button>
          </div>
        </div>
        <h2 className="text-[#65676B] text-center block mb-4 mt-4">
          No Artists to show
        </h2>
      </Card>
    </div>
  );
}

export default Friends;
