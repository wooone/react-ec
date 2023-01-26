import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  line-height: 70px;
`;

export const IconsStyled = styled.i`
  font-size: 1.4rem;
  color: #0a1d37;
  cursor: pointer;
`;

export const UserIconImage = styled(motion.img)`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const SpanIconStyled = styled.span`
  position: relative;
`;
