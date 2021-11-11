import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
padding: 30px;
justify-content: space-evenly;
gap: 30px;
flex-wrap: wrap;
`;

export const CoverImage = styled.img`
object-fit: cover;
height: 200px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngredientsText = styled.span`
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

export const SeeMoreText = styled(IngredientsText)`
  color: orange;
  border: solid 2px orange;
`;

export const Loader = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;