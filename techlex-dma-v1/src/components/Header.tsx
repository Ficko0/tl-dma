import { HeaderEnum } from "../common/enums/header.enum";
// import { useRef, useState } from "react";
// import { motion } from "framer-motion";

// TODO: redesign the header

export default function Header() {
  const headerNames = Object.values(HeaderEnum);

  return (
    <header className="sticky top-0 opacity-80 pt-3 pb-3">
      <nav>
        <ul className="flex items-center justify-center">
          {headerNames.map((item) => (
            <li key={item} className="m-3 text-white text-[1.1rem]">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// export default function Header() {
//   return (
//     <div className="">
//       <SlideTabs />
//     </div>
//   );
// }

// const SlideTabs = () => {

//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   });

//   return (
//     <ul
//       onMouseLeave={() => {
//         setPosition((pv) => ({
//           ...pv,
//           opacity: 0,
//         }));
//       }}
//       className="relative mx-auto flex w-fit rounded-full bg-white p-1"
//     >
//       {headerNames.map((item) => (
//         <Tab setPosition={setPosition}>{item}</Tab>
//       ))}
//       <Cursor position={position} />
//     </ul>
//   );
// };

// const Tab = ({ children, setPosition }) => {
//   const ref = useRef(null);

//   return (
//     <li
//       ref={ref}
//       onMouseEnter={() => {
//         if (!ref?.current) return;

//         const { width } = ref.current.getBoundingClientRect();

//         setPosition({
//           left: ref.current.offsetLeft,
//           width,
//           opacity: 1,
//         });
//       }}
//       className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
//     >
//       {children}
//     </li>
//   );
// };

// const Cursor = ({ position }) => {
//   return (
//     <motion.li
//       animate={{
//         ...position,
//       }}
//       className="absolute z-0 h-7 rounded-full md:h-12"
//     />
//   );
// };
