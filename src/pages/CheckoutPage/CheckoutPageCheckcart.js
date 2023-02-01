import { motion } from "framer-motion";
const CheckoutPageCheckcart = ({ totalQty, totalAmount }) => {
  return (
    <>
      <div className="bg-primary_color p-5 text-white rounded-xl tracking-wider">
        <h6 className="d-flex items-center justify-between mb-3">
          總件數： <span>{totalQty} 件</span>
        </h6>
        <h6 className="d-flex items-center justify-between mb-3">
          商品總計： <span>${totalAmount}</span>
        </h6>
        <h6 className="d-flex items-center justify-between mb-5">
          <span className="">
            運費： <br />
            <span className="text-sm">免運費</span>
          </span>
          <span>0</span>
        </h6>
        <h4 className="text-[1.5rem] d-flex items-center justify-between border-t-[1px] border-solid border-gray-500 pt-5">
          總金額： <span>${totalAmount}</span>
        </h4>
        <motion.button
          className="bg-white text-primary_color px-8 py-2 rounded-md w-full mt-5"
          whileTap={{ scale: 1.025}}
        >
          送出訂單
        </motion.button>
      </div>
    </>
  );
};

export default CheckoutPageCheckcart;
