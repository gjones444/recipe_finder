import "./App.css";
import styled from "styled-components";
import { Header, Logo, AppNameComponent, SearchComponent, SearchIcon, SearchInput } from "./components/Header";

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const RecipeListContainer = styled.div``

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          Recipe Finder
          <Logo></Logo>
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="../public/search-icon.svg" />
          <SearchInput placeholder="Search Recipe" />
        </SearchComponent>
      </Header>
    </Container>
  );
}

export default App;
