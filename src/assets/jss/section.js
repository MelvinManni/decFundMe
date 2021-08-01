const { default: styled } = require("styled-components");

const Section = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  /* padding-top: ${(props) => (props.padding === "lg" ? "190px" : "95px")}; */
  padding-bottom: ${(props) => (props.padding === "lg" ? "160px" : "130px")};
  padding-right: 240px;
  padding-left: 240px;
  @media all and (max-width: 1440px) {
    padding-right: 160px;
    padding-left: 160px;
  }
  @media all and (max-width: 996px) {
    padding-right: 90px;
    padding-left: 90px;
  }
  @media all and (max-width: 720px) {
    padding-right: 45px;
    padding-left: 45px;
  }
  @media all and (max-width: 523px) {
    padding-right: 25px;
    padding-left: 25px;
  }
`;

export default Section;
