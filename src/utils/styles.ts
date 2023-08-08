import styled from "styled-components";

const breakpoints = {
  xs: "320px",
  sm: "640px",
};
export const Task = styled.li`
  padding: 10px;
  list-style: none;
  color: #fff;
  border-bottom: 1px solid #575b6c;
`;

export const Title = styled.h2`
  color: #fff;
`;

export const AppButton = styled.button`
  background-image: linear-gradient(to right, #00d2ff 0%, #928dab 51%, #00d2ff 100%);
  margin: 10px;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const MainHeading = styled.h1`
  color: white;
  border-bottom: 1px solid #575b6c;
`;

export const Wrapper = styled.div`
  border: 1px solid #575b6c;
  border-radius: 15px;
  padding: 0px 10px;
`;

export const AppInput = styled.input`
  padding: 10px;
  width: 300px;
  @media only screen and (max-width: ${breakpoints.sm}) {
    flex-direction: row;
    width: -webkit-fill-available;
  }
`;
