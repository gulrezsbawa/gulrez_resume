import {
  Wrapper,
  InfoWrapper,
  InfoContent,
  InfoIcon,
  InfoText,
} from "./styled-components";
import { HiMail } from "react-icons/hi";
import { ImMobile2 } from "react-icons/im";
import { BsGlobe2, BsLinkedin } from "react-icons/bs";
import { useApplicantData } from "../../Components/Provider";

export const ApplicantInfo = () => {
  const { mail, mobile, website, linkedIn } = useApplicantData();

  const iconSize = "20px";
  const data = [
    {
      type: "mail",
      value: mail,
      icon: <HiMail size={iconSize} />,
    },
    {
      type: "mobile",
      value: mobile,
      icon: <ImMobile2 size={iconSize} />,
    },
    {
      type: "website",
      value: website,
      icon: <BsGlobe2 size={iconSize} />,
    },
    {
      type: "linkedIn",
      value: linkedIn,
      icon: <BsLinkedin size={iconSize} />,
    },
  ];

  const getLinked = ({ type, value }) => {
    switch (type) {
      case "mail":
        return `mailto:${value}`;
      case "mobile":
        return `tel:${value.replace("-", "")}`;
      case "website":
        return `${value}`;
      case "linkedIn":
        return `https://www.${value}`;
      default:
        return "";
    }
  };
  return (
    <Wrapper>
      <InfoWrapper>
        {data.map(({ type, icon, value }) => (
          <InfoContent key={type}>
            <InfoIcon>{icon}</InfoIcon>
            <InfoText href={getLinked({ type, value })} target="_blank">
              {value}
            </InfoText>
          </InfoContent>
        ))}
      </InfoWrapper>
    </Wrapper>
  );
};
