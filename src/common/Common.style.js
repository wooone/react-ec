import styled from "styled-components";
import bgImg from "../assets/images/bedroom.jpg";

export const CommonSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.562), rgba(0, 0, 0, 0.562)),
    url(${bgImg}) no-repeat center center;
  background-size: cover;
  padding: 100px 0;
`;

export const H1Styled = styled.h1`
  color: #fff;
  font-weight: 600;
`;
