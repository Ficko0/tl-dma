import { servicesData } from "../data/data";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="m-4 pt-12 sm:pt-[10rem]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="my-7"
      >
        <h2 className="heading_styles ml-4">What We Offer</h2>
        <span className="text-white font-light ml-4 text-base sm:text-[1.5rem] sm:text-justify">
          With our expertise, you are next in line for an extraordinary story.
          Take a peek at our services.
        </span>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-3 h-fit w-fit"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {servicesData.map((item) => (
          <div
            className="bg-white shadow-black shadow-lg w-full px-5 py-6 rounded-lg hover:bg-gray-200 transition hover:scale-[1.02] cursor-default"
            key={item.name}
          >
            <h3 className="font-extrabold text-[1.6rem] py-2">{item.name}</h3>
            <div className="pt-3">
              {item.services.map((service, index) => (
                <ul className="mt-2" key={index}>
                  <li className="font-medium text-[1.1rem] py-1">{service}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
