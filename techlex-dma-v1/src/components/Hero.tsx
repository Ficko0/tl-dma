import { motion } from "framer-motion";
import logoImage from "../public/techlex-logo.png";
import { ContactButton } from "./ContactButton";

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
      <div className="flex flex-wrap justify-around items-center md:my-20">
        <motion.div
          initial={{ opacity: 0, x: -200, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="text-center cursor-default w-full md:w-auto"
        >
          <h1 className="text-white font-bold text-[5rem] md:text-[9rem]">
            Techlex
          </h1>
          <span className="text-white font-light text-[1.5rem] md:text-[2rem]">
            Your Go-To Digital Marketing Agency
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-auto"
        >
          <img
            className="w-[25rem] md:w-[30rem] mx-auto"
            src={logoImage}
            alt="logo"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-fit m-auto"
      >
        <ContactButton />
      </motion.div>
    </>
  );
}
