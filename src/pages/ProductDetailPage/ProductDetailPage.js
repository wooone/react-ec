import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";


import { Container, Row, Col } from "reactstrap";

import Helmet from "../../components/helmet/Helmet";
import Common from "../../common/Common";

import products from "../../constants/data/products.js";
import ProductsList from "../../components/product/ProductsList";

// import { PrimaryButton } from "../../components/button/PrimaryButton";

import ProductPageInfoSection from "./ProductPageInfoSection.js";
import ProductPageReviewsSection from "./ProductPageReviewsSection";
import { cartActions } from "../../redux/slices/cartSlice";


const ProductDetailPage = () => {
  const [tab, setTab] = useState("desc");

  const reviewUser = useRef('');
  const reviewMsg = useRef('');

  const dispatch = useDispatch()


  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.prevenDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }))
  }

  return (
    <>
      <Helmet title={productName} />
      <Common title={productName} />

      <ProductPageInfoSection
        imgUrl={imgUrl}
        productName={productName}
        avgRating={avgRating}
        price={price}
        category={category}
        shortDesc={shortDesc}
        addToCart={addToCart}
      />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex items-center gap-5 text-primary_color font-medium text-base cursor-pointer">
                <h6
                  className={`${tab === "desc" ? "active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  商品描述
                </h6>
                <h6
                  className={`${tab === "rev" ? "active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  評論 ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="mt-5">
                  <p className="leading-6">{description}</p>
                </div>
              ) : (
                <ProductPageReviewsSection
                  reviews={reviews}
                  setRating={setRating}
                  submitHandler={submitHandler}
                  reviewUser={reviewUser}
                  reviewMsg={reviewMsg}
                />
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="text-lg font-semibold mt-[30px]">你可能會喜歡</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetailPage;
