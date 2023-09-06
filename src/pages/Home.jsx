import { Outlet } from "react-router-dom";
import MainNav from "../components/home/MainNav";

const Home = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default Home;
