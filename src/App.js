import React, { useState } from "react";
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
  SearchInput,
  SearchIcon
} from "./components/Header";
import {
  Container,
  RecipeListContainer,
  CoverImage,
  RecipeContainer,
  RecipeName,
  SeeMoreText,
  IngredientsText,
  Loader
} from "./components/RecipeLoadout";
import Axios from "axios";

const APP_ID = "f00d87f7";
const APP_KEY = "b7e16be8101cf318d758955693f93bb5";

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
        <IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          View Original Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};

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
        <Logo src="saladlogo.png" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="search_icon.svg"/>
          <SearchInput onChange={onTextChange} placeholder="Search Recipe" />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe}></RecipeComponent>
          ))
        ) : (
          <Loader src="saladlogo.png" />
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
