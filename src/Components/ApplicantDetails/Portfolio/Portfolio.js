import {
  Wrapper,
  Title,
  ListWrapper,
  List,
  TitleWapper,
} from "./styled-components";
import {
  amazon,
  azuga,
  hacknewslogo,
  healthandglow,
  tiktok,
} from "../../../Images";
import { GiClick } from "react-icons/gi";

export const Portfolio = ({ title, list }) => {
  const getImage = (company) => {
    switch (company) {
      case "Amazon":
        return amazon;
      case "Health & Glow":
        return healthandglow;
      case "TikTok":
        return tiktok;
      case "Azuga":
        return azuga;
      case "Hacker News":
        return hacknewslogo;
      default:
        return healthandglow;
    }
  };
  return (
    <Wrapper>
      <TitleWapper>
        <Title>{title}</Title> <GiClick />
      </TitleWapper>
      <ListWrapper>
        {list.map(({ name, link }) => (
          <List key={`${title}_${name}`}>
            <a rel="noreferrer" href={link} target="_blank">
              <img src={getImage(name)} alt="" height="50px" />
            </a>
          </List>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
