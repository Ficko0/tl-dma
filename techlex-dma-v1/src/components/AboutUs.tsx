import { motion } from "framer-motion";
import refImage from "../public/5 simple marketing tips.webp";

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-center my-12 lg:my-[10rem] bg-[#072752] px-4">
        <div className="w-full lg:w-[40rem] my-8 lg:my-[15rem] px-4 py-3">
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
            className="text-white text-justify text-base lg:text-[1.2rem]"
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
            className="text-white font-bold py-4 text-[1.5rem] lg:text-[1.7rem]"
          >
            We Strive For Success!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-justify text-base lg:text-[1.2rem]"
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
          className="w-full lg:w-[30rem] flex justify-center"
        >
          <img
            className="mb-4 lg:h-[35rem] rounded-lg shadow-black shadow-lg transition object-cover"
            src={refImage}
            alt=""
          />
        </motion.div>
      </div>

      <motion.span
        initial={{ opacity: 0, y: 150, filter: "blur(10px)" }} // Initial state with blur
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Final state with no blur
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex justify-center items-center my-6 text-center"
      >
        <h3 className="text-white font-semibold text-2xl lg:text-[2.5rem]">
          Partner with Techlex and let’s make your business the next big success
          story!
        </h3>
      </motion.span>
    </>
  );
}
