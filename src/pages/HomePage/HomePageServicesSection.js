import Services from "../../components/services/Services";
import serviceData from "../../constants/data/serviceData";
import { Container, Row } from "reactstrap";

const HomePageServicesSection = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            {serviceData.map((item, index) => (
              <Services
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                bg={item.bg}
              ></Services>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePageServicesSection;
