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
  object-fit: cover;
  border-radius: 999px;
  cursor: pointer;
`;

export const SpanIconStyled = styled.span`
  position: relative;
`;

export const StickyHeader = styled.div`
  background-color: #fff;
  width: 100%;
  height: 70px;
  line-height: 70px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 3px 3px 8px -3px #d6d6d6;
`;

export const NavigationStyled = styled.div`
  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.53);
    z-index: 9999;
    display: none;

    &:active {
      display: flex;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  position: static;
  align-items: center;
  column-gap: 2.7rem;
  margin-bottom: 0;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: #fff;
    z-index: 99999;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
