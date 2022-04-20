import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
import bgImage from "../assets/bg-header-desktop.svg";
import smImage from "../assets/bg-header-mobile.svg";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
export const GlobalStyle = createGlobalStyle`
   html{
    background-color: #e9f1f1;

   }
   
    #root{
        margin:0 auto;
;
    }
 `;
export const Header = styled.header`
  background-color: hsl(180, 29%, 50%);
  background-size: cover;
  height: 156px;
  width: 100%;
  @media ${devices.tablet} {
    height: 156px;
    width: 100%;
  }
`;

export const Img = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  height: 100%;

  @media ${devices.tablet} {
    background-image: url(${smImage});
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  margin: 5rem auto;

  padding-top: 3rem;
  width: 80vw;
  position: relative;

  @media ${devices.tablet} {
    margin: 7rem auto;
    width: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  border: 1px solid #fff;
  box-shadow: 2px 2px 5px 2px hsl(180, 40%, 80%);
  padding: 12px;
  border-radius: 5px;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: space-evenly;
    margin-top: 5rem;
    border: 1px solid #fff;
    box-shadow: 2px 2px 5px 2px hsl(180, 40%, 80%);
    padding: 10px;
    border-radius: 5px;
    line-height: 1rem;
    position: relative;
  }
`;

export const ImgDetails = styled.div`
  display: flex;
  flex-direction: row;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    margin-right: 38rem;
    width: 100vw;
    margin-left: 1rem;
    margin-top: 3rem;
  }
`;
export const ImgDetailsImage = styled.img`
  padding-right: 2rem;
  margin: auto 0;

  @media ${devices.tablet} {
    padding-right: 2rem;
    width: 20%;
    position: absolute;
    top: -40px;
  }
`;
export const JobDescription = styled.div``;
export const JobAvaliable = styled.div`
  display: flex;
  margin-bottom: -2.5rem;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    padding-bottom: 7px;
  }
`;

export const Company = styled.h6`
  color: hsl(180, 8%, 52%);
  margin-top: 3px;
  margin-right: 0.5rem;
  font-size: 1rem;
`;
export const Type = styled.div<{ type?: string }>`
  background-color: ${(props) =>
    props.type === "new" ? "hsl(180, 8%, 52%)" : "#000"};
  color: #fff;
  padding: 6px;
  border-radius: 10px;
  margin-right: 0.5rem;
  height: fit-content;
  font-size: small;

  @media ${devices.tablet} {
    background-color: ${(props) =>
      props.type === "new" ? "hsl(180, 8%, 52%)" : "#000"};
    color: #fff;
    padding: 6px;
    border-radius: 40px;
    margin: -0.2rem 0.5rem;
    font-size: 1rem;
  }
`;

export const Title = styled.h3``;
export const JobDetail = styled.div`
  display: flex;
  flex-direction: row;
  color: hsl(180, 8%, 52%);
  width: 100%;
`;
export const Line = styled.hr`
  display: none;

  @media ${devices.tablet} {
    margin: 1rem;
    background-color: hsl(180, 8%, 52%);
    height: 1px;
    border: none;
  }
`;
export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding-top: 1.5rem;
  margin-left: 9rem;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media ${devices.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 80%;
    padding-top: 1.5rem;
    margin-left: 1rem;
    padding-bottom: 1.5rem;
  }
`;

export const Button = styled.button<{ clearThis?: string }>`
  background-color: hsl(180, 52%, 96%);
  color: hsl(180, 8%, 52%);
  height: fit-content;
  border-radius: ${(props) =>
    props.clearThis === "clearThis" ? "3px" : "14px"};
  margin-right: ${(props) =>
    props.clearThis === "clearThis" ? "1rem" : "1rem"};
  margin-bottom: ${(props) =>
    props.clearThis === "clearThis" ? "3rem" : "1rem"};
  border: none;
  display: flex;

  ${(props) =>
    props.clearThis &&
    css`
      &:hover {
        background-color: #000;
        color: white;
      }
    `}
  @media ${devices.tablet} {
    font-size: large;
  }
`;

export const TopArray = styled.div`
  position: absolute;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0 0;
  background-color: #fff;
  box-shadow: 2px 2px 5px 2px hsl(180, 40%, 80%);
  top: 6rem;
  right: 9rem;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #fff;
    box-shadow: 2px 2px 5px 2px hsl(180, 40%, 80%);
    border-radius: 5px;
    margin: -3rem 4rem;
    width: 80%;
    position: absolute;
    top: 9rem;
    right: 0rem;
  }
`;
export const Div = styled.div<{ name?: string }>`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
