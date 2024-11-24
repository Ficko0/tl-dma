import { servicesData } from "../data/data";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="m-[7rem] pt-[10rem]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="heading_styles ml-[1rem]">What We Offer</h2>
        <span className="text-white font-light ml-[1rem] text-[1.5rem]">
          With our expertise, you are next in line for an extraordinary story.
          Take a peek at our services.
        </span>
      </motion.div>
      <motion.div
        className="grid grid-cols-3 mb-3"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {servicesData.map((item) => (
          <div className="bg-white shadow-black shadow-lg m-5 w-[27rem] h-fit px-5 py-6 rounded-lg hover:bg-gray-200 transition hover:scale-[1.02] cursor-default">
            <h3 className="font-extrabold text-[1.6rem] py-2">{item.name}</h3>
            <div className="pt-3">
              {item.services.map((item) => (
                <ul className="mt-2">
                  <li className="font-medium text-[1.1rem] py-1">{item}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
