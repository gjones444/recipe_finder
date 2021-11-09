import React from "react";
import styled from "styled-components";

export const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
`;
export const Logo = styled.div`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
  height: 50%;
  margin-top: 5px;
`;

export const SearchIcon = styled.div`
  width: 32px;
  height: 32px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
`;

const HeaderComponent = () => {
  return <div></div>;
};

export default HeaderComponent;
