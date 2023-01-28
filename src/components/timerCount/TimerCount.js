import { Link } from "react-router-dom";
import { ButtonStyled } from "./TimerCount.style";
import { Col } from "reactstrap";
import counterImg from "../../assets/images/counter-timer-img.png";

import Clock from "./Clock";

const TimerCount = () => {
  return (
    <>
      <Col lg="6" md="6">
        <div className="">
          <h4 className="text-white font-semibold mb-2 text-sm">
            Limited Offers
          </h4>
          <h3 className="text-white font-medium text-lg mb-3">
            Quality Armchair
          </h3>
        </div>
        <Clock />
        <ButtonStyled whileTap={{ scale: 0.9 }}>
          <Link className="hover:text-gray-600" to="./shop">
            Visit Store
          </Link>
        </ButtonStyled>
      </Col>

      <Col lg="6" md="6" className="text-end">
        <img
          className="w-[70%] h-[70%] object-contain"
          src={counterImg}
          alt="Counter"
        />
      </Col>
    </>
  );
};

export default TimerCount;
