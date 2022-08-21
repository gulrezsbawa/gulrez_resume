import { Wrapper, LeftContent, RightContent } from "./styled-components";
import { useApplicantData } from "../Provider";
import { Tags } from "./Tags";
import { List } from "./List";
import { Portfolio } from "./Portfolio";

export const ApplicantDetails = () => {
  const {
    skills,
    tools,
    expertise,
    awards,
    professionServices,
    certifications,
    education,
    projects,
    portfolio,
  } = useApplicantData();
  return (
    <Wrapper>
      <LeftContent>
        {[skills, tools, expertise].map((item, i) => (
          <Tags key={`Tags${i}`} {...item} />
        ))}
        {[awards, certifications, education].map((item, i) => (
          <List key={`List${i}`} {...item} />
        ))}
        <Portfolio {...portfolio} />
      </LeftContent>
      <RightContent>
        <List {...professionServices} />
        <List {...projects} />
      </RightContent>
    </Wrapper>
  );
};
