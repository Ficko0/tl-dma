import { ContactButton } from "./ContactButton";
import { motion } from "framer-motion";

export default function PreFooterSection() {
  return (
    <div className="bg-[#1a2621] flex flex-col justify-center items-center h-screen">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: -50 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="text-center text-white font-extrabold text-[7rem] leading-[6rem]">
          BEGIN
          <br /> YOUR
          <br /> STORY
          <br /> HERE
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-6"
      >
        <ContactButton />
      </motion.div>
    </div>
  );
}
