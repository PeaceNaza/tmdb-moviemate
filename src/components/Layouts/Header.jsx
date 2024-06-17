import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="my-5 bg-white">
      <Link to={"/"} className="flex gap-3 w-20">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="text-[#a855f7] text-2xl">MovieMate</p>
      </Link>
    </div>
  );
};

export default Header;
