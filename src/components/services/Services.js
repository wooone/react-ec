import { Col } from "reactstrap";
import { ServiceItemStyled, IStyled } from "./Services.style";

const Services = ({ icon, title, subtitle, bg }) => {
  return (
    <>
      <Col lg="3" md="4" className="my-2">
        <ServiceItemStyled bgcardcolor={bg} whileHover={{ scale: 1.05 }}>
          <span>
            <IStyled className={icon}></IStyled>
          </span>
          <div>
            <h3 className="text-primary_color text-[1.1rem] font-semibold">
              {title}
            </h3>
            <p className="text-sm mt-1.5 text-gray-800">{subtitle}</p>
          </div>
        </ServiceItemStyled>
      </Col>
    </>
  );
};

export default Services;
