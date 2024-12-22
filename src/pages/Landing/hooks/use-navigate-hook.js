import { setAccessToken } from "../../../utils/sessionStorageUtils";
import { HOME } from "../../../constants/routeConstants";
import { useNavigate } from "react-router-dom";

function useNavigateHook(results) {
  const navigate = useNavigate();
  if (results.status === "fulfilled") {
    setAccessToken(results.data.accessToken);
    navigate("/" + HOME);
  }
}

export default useNavigateHook;
