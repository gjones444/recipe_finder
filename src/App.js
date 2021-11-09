import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import {
  Header,
  Logo,
  AppNameComponent,
  SearchComponent,
  SearchIcon,
  SearchInput,
} from "./components/Header";
import Axios from "axios";

const APP_ID = "f00d87f7";
const APP_KEY = "b7e16be8101cf318d758955693f93bb5";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-evenly;
  gap: 30px;
  flex-wrap: wrap;
`;
const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

const RecipeImage = styled.img`
  height: 200px;
`;

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

const IngredientsText = styled.span`
  font-size: 18px;
  font-weight: bold;
  border: solid 2px green;
  color: black;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
`;

const ViewRecipeText = styled(IngredientsText)`
  color: orange;
  border: solid 2px orange;
`;

function App() {

const [timeoutId, updateTimeoutId] = useState();

const fetchRecipe = (searchString) => {
  Axios.get(
    `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
  ).then(function (response) {
    // handle success
    console.log(response);
  });
};

const onTextChange = (e) => {
  clearTimeout(timeoutId);
  const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
  updateTimeoutId(timeout);
};
  return (
    <Container>
      <Header>
        <AppNameComponent>
          Recipe Finder
          <Logo></Logo>
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="../public/search-icon.svg" />
          <SearchInput onChange={onTextChange} placeholder="Search Recipe" />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <RecipeContainer>
          <RecipeImage src="https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg" />
          <RecipeName>Title</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <ViewRecipeText>View Recipe</ViewRecipeText>
        </RecipeContainer>
      </RecipeListContainer>
      <RecipeListContainer>
        <RecipeContainer>
          <RecipeImage src="https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg" />
          <RecipeName>Title</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <ViewRecipeText>View Recipe</ViewRecipeText>
        </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
