import { motion } from "framer-motion";

export const PrimaryButton = ({ buttonContent }) => {
  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      className="d-flex items-center bg-gray-800 text-base text-white px-5 py-2 rounded-full my-[20px] hover:bg-gray-700 transition duration-150 ease-out hover:ease-in"
    >
      {buttonContent}
    </motion.button>
  );
};
