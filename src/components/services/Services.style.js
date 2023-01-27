import styled from "styled-components";
import { motion } from "framer-motion";

export const ServiceItemStyled = styled(motion.div)`
  padding: 20px;
  background-color: ${props => props.bgCardColor || "#fdefe6"};
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
  border-radius: 5px;
`;

export const IStyled = styled.i`
  font-size: 2.2rem;
  background-color: #0a1d37;
  padding: 10px;
  border-radius: 50px;
  color: #fff;
  font-weight: 400;
`;
