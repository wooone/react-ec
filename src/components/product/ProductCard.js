import { Col } from "reactstrap";
import { ImageStyled, AddIconSpanStyled } from "./ProductCard.style";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("成功加入購物車");
  };
  return (
    <>
      <Col lg="3" md="4" className="mb-2">
        <div className="px-2 cursor-pointer">
          <div>
            <ImageStyled
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="product"
            />
          </div>

          <div className="py-2">
            <h3 className="text-base text-primary_color font-semibold mt-[15px]">
              <Link className="hover:text-gray-700" to={`/shop/${item.id}`}>
                {item.productName}
              </Link>
            </h3>
            <span className="text-gray-500 text-sm">{item.category}</span>
          </div>

          <div className="d-flex items-start justify-between">
            <span className="text-primary_color text-base font-medium ">
              NT$ {item.price}
            </span>
            <AddIconSpanStyled whileTap={{ scale: 1.2 }} onClick={addToCart}>
              <i className="ri-add-line text-base p-[5px] bg-gray-800 text-white rounded-full hover:bg-gray-700"></i>
            </AddIconSpanStyled>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
