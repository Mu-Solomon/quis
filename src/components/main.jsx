import mainIMage from "../images/mainImage.jpg";
const Main = () => {
  // 618685
  return (
    <div className="bg-[#618685] p-6 h-screen ">
      <p className="text-4xl text-[#fefbd8] font-bold pt-8">
        Unleash your brain with teasers, lito questions And much more.
      </p>
      <img
        src={mainIMage}
        alt="You've missed this image"
        className=" rounded-2xl my-6 "
      />
      <button class="bg-[#d5f4e6] hover:bg-slate-800 hover:border-white hover:text-white text-[#618685] font-bold py-2 px-8 mt-4 rounded-full transform hover:-translate-y-1 hover:scale-110 ">
        Let's go
      </button>
    </div>
  );
};

export default Main;
