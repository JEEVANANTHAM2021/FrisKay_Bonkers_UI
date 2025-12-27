import load_img from "../assets/images/load_img.png";

const PageLoader = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-[#F7E2AC]"
      style={{
        backgroundImage: `url(${load_img})`,
        backgroundSize: "cover",       
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}
    >
    </div>
  );
};

export default PageLoader;
