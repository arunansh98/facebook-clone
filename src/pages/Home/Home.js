import { useNavigate } from "react-router-dom";
import { useFetchUserDetailsQuery } from "../../store";
import "./Home.css";
import { getUserId } from "../../utils/sessionStorageUtils";
import { PROFILE } from "../../constants/routeConstants";
import Avatar from "../../shared/view/Avatar/Avatar";

function Home() {
  const navigate = useNavigate();
  const { data, error } = useFetchUserDetailsQuery(getUserId());
  const fullName = data?.firstName + " " + data?.surName;
  return (
    <div className="home">
      <div className="footer ml-1">
        <ul className="text-[#050505] text-primary font-[600]">
          <li onClick={() => navigate("./" + PROFILE)}>
            <Avatar className="h-[28px] w-[28px] bg-transparent" />
            <span>{fullName}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
