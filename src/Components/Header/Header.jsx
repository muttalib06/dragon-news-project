
import { format } from "date-fns";
import logoImg from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center mt-8 flex-col">
      <img src={logoImg} alt="" />
      <div className="text-center mt-5">
        <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
        <p className="text-[#706F6F]">{format(new Date(),"EEEE, MMMM d, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
