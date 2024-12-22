import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./pages/Landing/Landing";
import HomePage from "./pages/Home/Home";
import { LANDING, HOME, PROFILE } from "./constants/routeConstants";
import Profile from "./pages/Profile/Profile";
import Header from "./shared/view/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LANDING} element={<LandingPage />} />
        <Route path={HOME} element={<RoutePage />}>
          <Route path="" element={<HomePage />} />
          <Route path={PROFILE} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function RoutePage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
