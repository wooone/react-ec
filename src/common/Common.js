import { Container } from "reactstrap";

import { CommonSection, H1Styled } from "./Common.style";

const Common = ({ title }) => {
  return (
    <>
      <CommonSection>
        <Container className="text-center">
          <H1Styled>{title}</H1Styled>
        </Container>
      </CommonSection>
    </>
  );
};

export default Common;
