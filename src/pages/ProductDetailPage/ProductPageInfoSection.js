import { Col, Container, Row } from "reactstrap";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { RatingIcon } from "./ProductDetail.style";

const ProductPageInfoSection = ({
  imgUrl,
  productName,
  avgRating,
  price,
  shortDesc,
  category,
}) => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <img src={imgUrl} alt="" />
          </Col>
          <Col lg="6">
            <div className="mt-[50px]">
              <h2 className="text-[1.6rem] mb-3">{productName}</h2>
              <div className="d-flex items-center gap-5 mb-3">
                <div>
                  <span>
                    <RatingIcon className="ri-star-s-fill"></RatingIcon>
                  </span>
                  <span>
                    <RatingIcon className="ri-star-s-fill"></RatingIcon>
                  </span>
                  <span>
                    <RatingIcon className="ri-star-s-fill"></RatingIcon>
                  </span>
                  <span>
                    <RatingIcon className="ri-star-s-fill"></RatingIcon>
                  </span>
                  <span>
                    <RatingIcon className="ri-star-half-s-line"></RatingIcon>
                  </span>
                </div>

                <p>
                  (
                  <span className="text-orange-600 font-medium">
                    {avgRating}
                  </span>{" "}
                  ratings)
                </p>
              </div>

              <div className="d-flex items-center gap-5">
                <span className="text-[1.3rem] font-medium">$ {price}</span>
                <span>Category: {category}</span>
              </div>
              <p className="mt-3">{shortDesc}</p>

              <PrimaryButton
                buttonContent={[
                  <i className="ri-shopping-bag-line pr-2"></i>,
                  "加入購物車",
                ]}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductPageInfoSection;
