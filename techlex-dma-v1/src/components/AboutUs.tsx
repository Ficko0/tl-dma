import { useRef } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const ref = useRef(null);

  return (
    <div className="m-[7rem] pt-[10rem] overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="heading_styles">Who Are We?</h1>
      </motion.div>
      <div className="flex flex-wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-[1.2rem] font-light">
            At Techlex, we are passionate about transforming ideas into
            impactful digital experiences. As a dynamic digital marketing
            agency, we specialize in creating tailored strategies that amplify
            your brand’s online presence and drive measurable results.
          </p>
          <h4 className="text-white text-[2rem] pt-[4rem] font-semibold pb-2">
            Our mission is simple:
          </h4>
          <p className="text-white text-[1.2rem] font-light">
            To empower businesses with innovative marketing solutions that
            connect, engage, and grow. From strategic campaigns to expert social
            media management and eye-catching content creation, we help brands
            thrive in today’s fast-paced digital world.
          </p>
        </motion.div>
        <div>image</div>
      </div>
      <div className="flex justify-center items-center mt-[5rem]">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white font-extrabold text-[2rem]"
        >
          Partner with Techlex and let’s make your business the next big success
          story!
        </motion.h2>
      </div>
    </div>
  );
}
