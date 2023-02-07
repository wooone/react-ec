import styled from "styled-components";
import { motion } from "framer-motion";

export const ServiceItemStyled = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.bgcardcolor || "#fdefe6"};
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
  border-radius: 5px;

  @media (max-width: 992px) and (min-width: 768px) {
    min-height: 128px;
  }

  @media(max-width: 576px) {
    padding: 20px;
  }
`;

export const IStyled = styled.i`
  font-size: 2rem;
  background-color: #0a1d37;
  padding: 10px;
  border-radius: 50px;
  color: #fff;
  font-weight: 400;

  @media (max-width: 992px) {
    font-size: 1.8rem;
    padding: 5px;
  }
`;
