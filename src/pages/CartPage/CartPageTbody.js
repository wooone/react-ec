import { TableTdImg, MotionIcon } from "./CartPage.style";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const CartPageTbody = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <>
      <tr>
        <td>
          <TableTdImg src={item.imgUrl} alt="" />
        </td>
        <td>{item.productName}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>
          <MotionIcon
            whileTap={{ scale: 1.2 }}
            className="ri-delete-bin-line"
            onClick={deleteProduct}
          ></MotionIcon>
        </td>
      </tr>
    </>
  );
};

export default CartPageTbody;
