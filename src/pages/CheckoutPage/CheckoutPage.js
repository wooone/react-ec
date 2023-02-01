import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/helmet/Helmet";
import Common from "../../common/Common";

import CheckoutPageForm from "./CheckoutPageForm";
import CheckoutPageCheckcart from "./CheckoutPageCheckcart";

import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Helmet title="結帳">
        <Common title="結帳" />

        <section>
          <Container>
            <Row>
              <Col lg="8">
                <CheckoutPageForm />
              </Col>

              <Col lg="4">
                <CheckoutPageCheckcart
                  totalQty={totalQty}
                  totalAmount={totalAmount}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default CheckoutPage;
