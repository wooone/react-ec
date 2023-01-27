// import productImg from "../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";
import { ImageStyled, AddIconSpanStyled } from "./ProductCard.style";

import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <>
      <Col lg="3" md="4">
        <div className="px-2 cursor-pointer">
          <div>
            <ImageStyled
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="product"
            />
          </div>

          <div className="py-2">
            <h3 className="text-md text-primary_color font-semibold mt-[15px]">
              <Link className="hover:text-gray-700" to="/shop/id">
                {item.productName}
              </Link>
            </h3>
            <span className="text-gray-500 text-sm">{item.category}</span>
          </div>

          <div className="d-flex items-start justify-between">
            <span className="text-primary_color text-md font-medium ">
              {item.price}
            </span>
            <AddIconSpanStyled whileTap={{ scale: 1.2 }}>
              <i className="ri-add-line text-md p-[5px] bg-gray-800 text-white rounded-full hover:bg-gray-700"></i>
            </AddIconSpanStyled>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
