const { default: styled } = require("styled-components");

const GridContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  padding: 15px 0;
  display: flex;
  flex-wrap: ${(props) => (props.nowrap ? "no-wrap" : "wrap")};
  justify-content: ${(props) => (props.justify ? props.justify : "unset")};
  align-items: ${(props) => (props.align ? props.align : "unset")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  @media (min-width: 576px) {
    flex-direction: ${(props) => (props.smdirection ? props.smdirection : "row")};
    justify-content: ${(props) => (props.smJustify ? props.smJustify : null)};
    align-items: ${(props) => (props.smAlign ? props.smAlign : null)};
  }
  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.mddirection ? props.mddirection : "row")};
    justify-content: ${(props) => (props.mdJustify ? props.mdJustify : null)};
    align-items: ${(props) => (props.mdAlign ? props.mdAlign : null)};
  }
  @media (min-width: 992px) {
    flex-direction: ${(props) => (props.lgdirection ? props.lgdirection : "row")};
    justify-content: ${(props) => (props.lgJustify ? props.lgJustify : null)};
    align-items: ${(props) => (props.lgAlign ? props.lgAlign : null)};
  }
  @media (min-width: 1200px) {
    flex-direction: ${(props) => (props.xldirection ? props.xldirection : "row")};
    justify-content: ${(props) => (props.xlJustify ? props.xlJustify : null)};
    align-items: ${(props) => (props.xlAlign ? props.xlAlign : null)};
  }
`;

const GridCol = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: ${(props) =>
    props.col === 1
      ? " 8.333333%"
      : props.col === 2
      ? "16.666667%"
      : props.col === 3
      ? "25%"
      : props.col === 4
      ? "33.333333%"
      : props.col === 5
      ? "41.666667%"
      : props.col === 6
      ? "50%"
      : props.col === 7
      ? "58.333333%"
      : props.col === 8
      ? "66.666667%"
      : props.col === 9
      ? "75%"
      : props.col === 10
      ? "83.333333%"
      : props.col === 11
      ? "91.666667%"
      : props.col === 12
      ? "100%"
      : null};
  @media all and (min-width: 576px) {
    max-width: ${(props) =>
      props.sm === 1
        ? " 8.333333%"
        : props.sm === 2
        ? "16.666667%"
        : props.sm === 3
        ? "25%"
        : props.sm === 4
        ? "33.333333%"
        : props.sm === 5
        ? "41.666667%"
        : props.sm === 6
        ? "50%"
        : props.sm === 7
        ? "58.333333%"
        : props.sm === 8
        ? "66.666667%"
        : props.sm === 9
        ? "75%"
        : props.sm === 10
        ? "83.333333%"
        : props.sm === 11
        ? "91.666667%"
        : props.sm === 12
        ? "100%"
        : null} !important;
  }
  @media all and (min-width: 768px) {
    max-width: ${(props) =>
      props.md === 1
        ? " 8.333333%"
        : props.md === 2
        ? "16.666667%"
        : props.md === 3
        ? "25%"
        : props.md === 4
        ? "33.333333%"
        : props.md === 5
        ? "41.666667%"
        : props.md === 6
        ? "50%"
        : props.md === 7
        ? "58.333333%"
        : props.md === 8
        ? "66.666667%"
        : props.md === 9
        ? "75%"
        : props.md === 10
        ? "83.333333%"
        : props.md === 11
        ? "91.666667%"
        : props.md === 12
        ? "100%"
        : null} !important;
  }
  @media all and (min-width: 992px) {
    max-width: ${(props) =>
      props.lg === 1
        ? " 8.333333%"
        : props.lg === 2
        ? "16.666667%"
        : props.lg === 3
        ? "25%"
        : props.lg === 4
        ? "33.333333%"
        : props.lg === 5
        ? "41.666667%"
        : props.lg === 6
        ? "50%"
        : props.lg === 7
        ? "58.333333%"
        : props.lg === 8
        ? "66.666667%"
        : props.lg === 9
        ? "75%"
        : props.lg === 10
        ? "83.333333%"
        : props.lg === 11
        ? "91.666667%"
        : props.lg === 12
        ? "100%"
        : null} !important;
  }
  @media all and (min-width: 1200px) {
    max-width: ${(props) =>
      props.xl === 1
        ? " 8.333333%"
        : props.xl === 2
        ? "16.666667%"
        : props.xl === 3
        ? "25%"
        : props.xl === 4
        ? "33.333333%"
        : props.xl === 5
        ? "41.666667%"
        : props.xl === 6
        ? "50%"
        : props.xl === 7
        ? "58.333333%"
        : props.xl === 8
        ? "66.666667%"
        : props.xl === 9
        ? "75%"
        : props.xl === 10
        ? "83.333333%"
        : props.xl === 11
        ? "91.666667%"
        : props.xl === 12
        ? "100%"
        : null} !important;
  }
`;

export { GridContainer, GridCol };
