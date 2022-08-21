import { Wrapper, Title, ListWrapper, List } from "./styled-components";

export const Tags = ({ title, list }) => (
  <Wrapper>
    <Title>{title}</Title>
    <ListWrapper>
      {list.map((item) => (
        <List key={`${title}_${item}`}>{item}</List>
      ))}
    </ListWrapper>
  </Wrapper>
);
