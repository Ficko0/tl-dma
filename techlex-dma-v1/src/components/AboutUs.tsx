import { motion } from "framer-motion";
import refImage from "../public/5 simple marketing tips.webp";

export default function AboutUs() {
  return (
    <>
      <div className="flex justify-around items-center my-[10rem] bg-[#072752]">
        <div className=" w-[40rem] my-[15rem] px-4 py-3">
          <motion.h2
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="heading_styles"
          >
            Who Are We?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-justify text-[1.2rem]"
          >
            At Techlex, we are passionate about transforming ideas into
            impactful digital experiences. As a dynamic digital marketing
            agency, we specialize in creating tailored strategies that amplify
            your brand’s online presence and drive measurable results.
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white font-bold py-4 text-[1.7rem]"
          >
            We Strive For Success!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-justify text-[1.2rem]"
          >
            Our mission is simple: to empower businesses with innovative
            marketing solutions that connect, engage, and grow. From strategic
            campaigns to expert social media management and eye-catching content
            creation, we help brands thrive in today’s fast-paced digital world.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <img
            className="w-fit h-[30rem] rounded-lg shadow-black shadow-lg hover:scale-105 transition hover:rotate-[3deg]"
            src={refImage}
            alt=""
          />
        </motion.div>
      </div>
      <motion.span
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex justify-center items-center"
      >
        <h3 className="text-white font-semibold text-[2.5rem]">
          Partner with Techlex and let’s make your business the next big success
          story!
        </h3>
      </motion.span>
    </>
  );
}
