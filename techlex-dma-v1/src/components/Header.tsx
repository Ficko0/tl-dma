import { HeaderEnum } from "../common/enums/header.enum";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const headerLinks = Object.values(HeaderEnum);

  return (
    // <motion.header
    //   initial={{ opacity: 0, y: -200 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1, type: "tween" }}
    // >
    //   <nav>
    //     <ul className="flex flex-wrap justify-center items-center gap-10 w-fit m-auto mt-10 text-[1.1rem] shadow-black shadow-lg bg-white px-5 py-3 rounded-full">
    //       <li className="hover:scale-105 transition hover:font-semibold">
    //         <Link to={`/`}>Home</Link>
    //       </li>
    //       {headerLinks.map((link) => (
    //         <li
    //           className="hover:scale-105 transition hover:font-semibold"
    //           key={link}
    //         >
    //           <Link to={`${link.toLowerCase()}`}>{link}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </motion.header>
    <motion.header
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "tween" }}
    >
      <nav>
        <ul className="flex flex-wrap justify-center items-center gap-10 w-fit m-auto mt-10 text-sm sm:text-[1rem] md:text-[1.1rem] shadow-black shadow-lg bg-white px-4 sm:px-5 py-3 rounded-full">
          <li className="hover:scale-105 transition hover:font-semibold">
            <Link to={`/`}>Home</Link>
          </li>
          {headerLinks.map((link) => (
            <li
              className="hover:scale-105 transition hover:font-semibold"
              key={link}
            >
              <Link to={`${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
