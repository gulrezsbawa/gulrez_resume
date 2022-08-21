import {
  Wrapper,
  Title,
  ListWrapper,
  Details,
  Name,
  Year,
  ListItem,
  SubTitle,
} from "./styled-components";

export const List = ({ title, list }) => (
  <Wrapper>
    <Title>{title}</Title>
    {list.map(({ name, year, subTitle, details }) => (
      <Details key={`${title}_${name || subTitle}`}>
        <Name>{name}</Name>
        <SubTitle>{subTitle}</SubTitle>
        <Year>{year}</Year>
        <ListWrapper>
          {details.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ListWrapper>
      </Details>
    ))}
  </Wrapper>
);
