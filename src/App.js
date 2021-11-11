import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
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

const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = React.useState(false);
  const { recipeObj } = props;
  console.log(recipeObj);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent id="alert-dialog-slide-title">
          <table>
            <thead>
              <th>Ingredients</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => window.open(recipeObj.url)}>See More</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientText onClick={() => setShow(true)}>
          Ingredients
        </IngredientText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          View Original Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  box-shadow: 0 3px 10px 0 #aaa;
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

const SeeMoreText = styled(IngredientsText)`
  color: orange;
  border: solid 2px orange;
`;

const IngredientText = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
  margin-bottom: 12px;
`;

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
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
          <Logo>INSERT LOGO HERE</Logo>
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="../public/search-icon.svg" />
          <SearchInput onChange={onTextChange} placeholder="Search Recipe" />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length &&
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe}></RecipeComponent>
          ))}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
