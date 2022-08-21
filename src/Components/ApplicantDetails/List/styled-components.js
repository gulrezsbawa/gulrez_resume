import { styled } from "baseui";
import { THEME_COLOR } from "../../constant";

export const Wrapper = styled("div", ({ $theme: { sizing } }) => ({
  marginBottom: sizing.scale600,
}));

export const Details = styled("div", ({ $theme: { sizing } }) => ({
  marginBottom: sizing.scale300,
}));

export const Title = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale600,
  fontFamily: "Roboto",
  color: THEME_COLOR,
  fontWeight: 700,
  marginBottom: sizing.scale300,
  [mediaQuery.medium]: {
    fontSize: sizing.scale700,
  },
}));

export const Name = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale500,
  fontWeight: 700,
  fontFamily: "Roboto",
  [mediaQuery.medium]: {
    fontSize: sizing.scale600,
  },
}));
export const SubTitle = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale500,
  fontFamily: "Arial",
  [mediaQuery.medium]: {
    fontSize: sizing.scale600,
  },
}));

export const Year = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale500,
  fontFamily: "Roboto",
  fontStyle: "italic",
  color: THEME_COLOR,
  [mediaQuery.medium]: {
    fontSize: sizing.scale600,
  },
}));

export const ListWrapper = styled("ul", {});

export const ListItem = styled("li", ({ $theme: { sizing } }) => ({
  listStyleType: "circle",
  "::marker": {
    color: THEME_COLOR,
    fontSize: sizing.scale700,
  },
}));
