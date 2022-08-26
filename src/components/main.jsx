import mainIMage from "../images/mainImage.jpg";
import { Link } from "react-router-dom";
const Main = () => {
  // 618685
  return (
    <div className="bg-[#618685] p-6 h-full ">
      <p className="text-4xl text-[#fefbd8] font-bold pt-8 font-poppins ">
        Unleash your brain with teasers, lito questions And much more.
      </p>
      <img
        src={mainIMage}
        alt="You've missed this image"
        className=" rounded-2xl my-6 "
      />
      <Link to="/questions">
        {" "}
        <button class="bg-[#d5f4e6] hover:bg-slate-800 hover:border-white hover:text-white text-[#618685] font-bold py-2 px-8 mt-4 rounded-full transform hover:-translate-y-1 hover:scale-110 font-puff ">
          Let's go
        </button>
      </Link>
    </div>
  );
};

export default Main;
