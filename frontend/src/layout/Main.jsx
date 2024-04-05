import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main container mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
