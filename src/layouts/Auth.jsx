
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Auth = () => {

  return (
    <div className="bg-[#F3F3F3] h-screen mt-0">
      <header className="max-w-[80%] mx-auto ">
        <Navbar></Navbar>
      </header>
      <div>
       
      </div>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Auth;
