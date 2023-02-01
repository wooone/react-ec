import React from "react";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { InputStyled, SpanStyled, TextAreaStyled } from "./ProductDetail.style";

const ProductPageReviewsSection = ({ reviews, setRating, submitHandler, reviewUser, reviewMsg }) => {
  return (
    <div className="mt-5">
      <div className="">
        <ul>
          {reviews.map((item, index) => (
            <li key={index} className="mb-4">
              <h6>Jhon Doe</h6>
              <span className="text-orange-600 font-semibold">
                {item.rating} (average rating)
              </span>
              <p className="pt-[10px]">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="w-[70%] m-auto mt-[50px]">
          <h4 className="text-[1.2rem] font-semibold mb-[30px]">
            留下你的評價
          </h4>
          <form action="" onSubmit={submitHandler}>
            <div className="mb-[30px]">
              <InputStyled type="text" placeholder="Enter name" ref={reviewUser} />
            </div>

            <div className="mb-[30px] d-flex items-center gap-5">
              <SpanStyled onClick={() => setRating(1)}>
                1 <i className="ri-star-s-fill"></i>
              </SpanStyled>
              <SpanStyled onClick={() => setRating(2)}>
                2 <i className="ri-star-s-fill"></i>
              </SpanStyled>
              <SpanStyled onClick={() => setRating(3)}>
                3 <i className="ri-star-s-fill"></i>
              </SpanStyled>
              <SpanStyled onClick={() => setRating(4)}>
                4 <i className="ri-star-s-fill"></i>
              </SpanStyled>
              <SpanStyled onClick={() => setRating(5)}>
                5 <i className="ri-star-s-fill"></i>
              </SpanStyled>
            </div>

            <div className="mb-[30px]">
              <TextAreaStyled
                rows={4}
                type="text"
                placeholder="Review Messages"
                ref={reviewMsg}
              />
            </div>

            <PrimaryButton buttonContent={"Submit"} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPageReviewsSection;
