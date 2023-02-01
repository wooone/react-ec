import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/helmet/Helmet";
import Common from "../../common/Common";

import CartPageTbody from "./CartPageTbody";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FullWidthButton } from "../../components/button/FullWidthButton";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Helmet title="購物車">
        <Common title="購物車" />
        <section>
          <Container>
            <Row>
              <Col lg="9">
                {cartItems.length === 0 ? (
                  <h2 className="text-lg text-center">購物車沒有商品哦！</h2>
                ) : (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <CartPageTbody item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                )}
              </Col>
              <Col lg="3">
                <div className="d-flex items-center justify-between">
                  <h6>小計</h6>
                  <span className="text-lg font-semibold">${totalAmount}</span>
                </div>
                <p className="mt-1 mb-7 text-sm tracking-wide">運費於結帳時做計算</p>
                <div>
                  <Link to="/checkout">
                    <FullWidthButton buttonContent={"結帳"}></FullWidthButton>
                  </Link>

                  <Link to="/shop">
                    <FullWidthButton buttonContent={"繼續購物"}></FullWidthButton>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default CartPage;
