import { createStore } from "redux";

const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost",
};

const reducer = (state) => {
  return state;
};

const store = createStore(reducer, initialState);

export default store;
