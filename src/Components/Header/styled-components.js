import { styled } from "baseui";
import { THEME_COLOR } from "../constant";

export const Body = styled("div", ({ $theme: { mediaQuery } }) => ({
  borderBottom: "1px solid #CDCDCD",
  "-webkit-box-shadow": "0 4px 5px rgba(57, 63, 72, 0.3)",
  "-moz-box-shadow": "0 4px 5px rgba(57, 63, 72, 0.3)",
  boxShadow: "0 4px 5px rgba(57, 63, 72, 0.3)",
  width: "calc(100vw - 40px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "0 20px",
  [mediaQuery.medium]: {
    height: "216px",
    width: "calc(100vw - 168px)",
    padding: "0 84px",
  },
}));

export const ApplicantName = styled("div", ({ $theme: { mediaQuery } }) => ({
  fontSize: "32px",
  [mediaQuery.medium]: {
    fontSize: "48px",
  },
}));

export const Designation = styled(
  "div",
  ({ $theme: { mediaQuery, sizing } }) => ({
    fontSize: sizing.scale600,
    color: THEME_COLOR,
    marginBottom: "12px",
    [mediaQuery.medium]: {
      fontSize: sizing.scale800,
    },
  })
);

export const BriefSummary = styled(
  "div",
  ({ $theme: { mediaQuery, sizing } }) => ({
    fontSize: "14px",
    color: "#1A1110",
    paddingBottom: sizing.scale600,
    [mediaQuery.medium]: {
      fontSize: "18px",
      display: "-webkit-box",
      "-webkit-line-clamp": 4,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingBottom: 0,
    },
  })
);
