import { motion } from "framer-motion";
import logoImage from "../public/techlex-logo.png";

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
    <>
      <div className="flex flex-wrap justify-around items-center my-20">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center cursor-default"
        >
          <h1 className="text-white font-bold text-[9rem]">Techlex</h1>
          <span className="text-white font-light text-[2rem]">
            Your Go-To Digital Marketing Agency
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img className="align-middle size-[30rem]" src={logoImage} alt="" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, type: "spring" }}
        className="flex justify-center items-center"
      >
        <button className="bg-white px-5 py-4 text-xl rounded-full hover:bg-gray-200 transition hover:scale-105 hover:font-semibold">
          Schedule a Meeting
        </button>
      </motion.div>
    </>
  );
}
