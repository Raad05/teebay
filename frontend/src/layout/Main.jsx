import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
