import "./App.css";
import styled from "styled-components";

const Container = styled.div``;
const Header = styled.div`
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
const Logo = styled.div`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
  height: 50%;
  margin-top: 15px;
`;

const SearchIcon = styled.div`
  width: 32px;
  height: 32px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          Recipe Finder
          <Logo></Logo>
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="search-icon.svg" />
          <SearchInput placeholder="Search Recipe" />
        </SearchComponent>
      </Header>
    </Container>
  );
}

export default App;
