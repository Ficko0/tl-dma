export default function Hero() {
  // This code bellow is one example with a logo attached

  //   return (
  //     <div className="flex h-screen flex-col mt-[5rem]">
  //       <div className="flex justify-evenly items-center flex-wrap">
  //         <div>
  //           <img src={logoImage} className="w-[25rem]" alt="" />
  //         </div>
  //         <div>
  //           <h1 className="text-white font-semibold text-[5rem]">TechLex</h1>
  //           <p className="text-white text-wrap text-[1.5rem]">
  //             Your #1 digital marketing agency helping your buisness grow!
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex justify-center items-center flex-wrap mt-[10rem]">
  //         <p className="text-white text-[2.4rem] font-extralight">
  //           We Make Your Brand Go{" "}
  //           <span className="text-yellow-600 font-bold">Viral.</span>
  //         </p>
  //       </div>
  //     </div>
  //   );

  // This code bellow is without a logo and is way cleaner

  return (
    <div>
      <div className="flex flex-col justify-center items-center flex-wrap">
        <h1 className="text-white text-[11rem] font-bold mt-[11rem]">
          TechLex
        </h1>
        <p className="text-white font-extralight text-[2.6rem]">
          Your go-to digital marketing agency!
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-[6rem]">
        <button className="border border-white text-[1.3rem] py-2 px-6 rounded-full bg-white text-gray-800 font-semibold">
          Schedule a Meeting
        </button>
      </div>
    </div>
  );
}